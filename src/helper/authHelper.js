const Models = require("../../models");
const Axios = require("axios");
const querystring = require('query-string');
const sequelize = require("../../models");
const { checkDuplicateEmail, response, generateUsername, getUserCredentials } = require("./utilityHelper");

require('dotenv');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

exports.getGoogleAuthURL = () => {
	const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
	const options = {
		redirect_uri: "http://localhost:5010/user-service/api/v1/",
		client_id: GOOGLE_CLIENT_ID,
		access_type: "offline",
		response_type: "code",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		].join(" "),
	};

	return `${rootUrl}?${querystring.stringify(options)}`;

}

/*
	* Uses the code to get tokens
	* that can be used to fetch the user's profile
*/
const getTokens = async ({ code, clientId, clientSecret, redirectUri }) => {
	const url = "https://oauth2.googleapis.com/token";
	const values = {
		code,
		client_id: clientId,
		client_secret: clientSecret,
		redirect_uri: redirectUri,
		grant_type: "authorization_code",
	};

	const res_value = await Axios({
		method: 'POST',
		url,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: querystring.stringify(values)
	}).catch((error) => {
		console.error(`Failed to fetch auth tokens`);
	});

	if (!res_value) {
		return null
	}
	return res_value.data;
}

// Getting the user from Google with the code
exports.callBackAction = async (req, res, next) => {
	const code = req.query.code;

	const token_value = await getTokens({
		code,
		clientId: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		redirectUri: "http://localhost:5010/user-service/api/v1/",
	});
	let id_token, access_token, googleUser;
	if (token_value) {
		id_token = token_value.id_token
		access_token = token_value.access_token

		// Fetch the user's profile with the access token and bearer
		googleUser = await Axios({
			method: "GET",
			url: `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
			headers: {
				Authorization: `Bearer ${id_token}`,
			}
		}).catch((error) => {
			console.error(`Failed to fetch user`);
		});
	}

	if (!token_value || !googleUser) {
		return response(res, false, 400, "Could not fetch user details")
	}

	const { email, name } = googleUser.data

	const t = await Models.sequelize.transaction();

	try {
		const exiting_email = await getUserCredentials(email)
		if (!exiting_email) {
			const userEmail = await Models.email.create({ email, createdby: `${name}` }, { transaction: t });
			const username = await generateUsername(name)
			const person = await Models.person.create({
				firstname: name.split(' ')[0],
				lastname: name.split(' ')[1],
				createdby: `${name}`
			}, { transaction: t });

			await Models.personemail.create({
				personid: person.personid,
				emailid: userEmail.emailid,
				isprimary: true,
				createdby: `${name}`
			}, { transaction: t })

			const user_access = await Models.accessuser.create({
				personid: person.personid,
				username,
				createdby: `${name}`
			}, { transaction: t })

			await userEmail.update({ personid: person.personid })

			await Models.userlogin.create({
				accessuserid: user_access.accessuserid
			}, { transaction: t })
		} else {
			const user = exiting_email.personemail?.person
			const user_login_details = user.accessuser?.userlogins

			if (!user_login_details) {
				await Models.userlogin.create({
					accessuserid: user.accessuser.accessuserid
				}, { transaction: t })
			}
		}

		await t.commit();
		return googleUser.data
	} catch (e) {
		await t.rollback();
		console.log(e);
		return { statusCode: 500, message: 'Error Occurred', error: false }
	}
}


// const getLinkedinUrl = (req, res) => {
// 	return res.status(200).json(
// 		response({
// 			message: "LinkedIn URL",
// 			success: true,
// 			data: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile%20r_emailaddress&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${LINKEDIN_CALLBACK_URL}`,
// 		})
// 	);
// };

// /*
//  * Uses the code to get tokens
//  * that can be used to fetch the user's profile
//  */
// const getLinkedinAccessToken = async ({
//   code,
//   clientId,
//   clientSecret,
//   redirectUri,
// }) => {
//   const url = "https://api.linkedin.com/oauth/v2/accessToken";

//   const values = {
//     code,
//     client_id: clientId,
//     client_secret: clientSecret,
//     redirect_uri: redirectUri,
//     grant_type: "authorization_code",
//   };

//   const res_value = await axios({
//     method: "POST",
//     url,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     data: querystring.stringify(values),
//   }).catch((error) => {
//     console.log(`Failed to fetch auth tokens`);
//     console.error(error);
//   });

//   if (!res_value) {
//     return null;
//   }
//   return res_value.data;
// };

// const linkedinAccessToken = async (req, res) => {
//   const { code } = req.query;
//   try {
//     if (!code) {
//       return true;
//     }

//     const token = await getLinkedinAccessToken({
//       code,
//       redirectUri: LINKEDIN_CALLBACK_URL,
//       clientId: LINKEDIN_CLIENT_ID,
//       clientSecret: LINKEDIN_SECRET_ID,
//     });

// 		const linkedinUserEmail = await axios({
// 			method: "GET",
// 			url: `https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`,
// 			headers: {
// 				Authorization: `Bearer ${token.access_token}`,
// 			},
// 		}).catch((error) => {
// 			console.log(error)
// 			return res.status(400).json({ message: `Failed to fetch token` });
//     });
//     const linkedinUser = await axios({
//       method: "GET",
//       url: `https://api.linkedin.com/v2/me`,
//       headers: {
//         Authorization: `Bearer ${token.access_token}`,
//       },
//     }).catch((error) => {
//       return res.status(400).json({ message: `Failed to fetch token` });
//     });

//     const email = linkedinUserEmail.data.elements[0]["handle~"].emailAddress;

//     //check if user exist then login
//     const existing_user = await userCollection.findOne({ email });

//     if (existing_user) {
//       return res.status(200).json(
//         response({
//           success: true,
//           message: "User login successfully",
//           data: authResponse(existing_user),
//         })
//       );
//     }

//     // create user
//     const fullName = `${linkedinUser.data.localizedFirstName} ${linkedinUser.data.localizedLastName}`;
//     const randomUserCode = (Math.random() + 1).toString(36).substring(7);

//     const data = {
//       firstName: linkedinUser.data.localizedFirstName,
//       lastName: linkedinUser.data.localizedLastName,
//       email,
//       username: slugify(fullName) + randomUserCode,
//       password: null,
//     };
//     const user = await register(data);

//     if (!user)
//       return res
//         .status(500)
//         .json(response({ success: false, message: "User not created" }));

//     return res.status(201).json(
//       response({
//         success: true,
//         message: "User created successfully",
//         data: user,
//       })
//     );
//   } catch (error) {
//     return res.status(500).json(
//       response({
//         message: "Something went wrong wile processing this request",
//         success: false,
//       })
//     );
//   }
// };

// const getFacebookURl = (req, res) => {
// 	const options = {
// 		client_id: FB_CLIENT_ID,
// 		redirect_uri: FB_CALLBACK_URL,
// 		scope: ['email', 'user_friends'].join(','), // comma seperated string
// 		response_type: 'code',
// 		auth_type: 'rerequest',
// 		display: 'popup',
// 	}

//   const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${querystring.stringify(
//     options
//   )}`;

//   return res.status(201).json(
//     response({
//       success: true,
//       message: "Facebook login URl",
//       data: facebookLoginUrl,
//     })
//   );
// };

// const facebookAccessToken = async (req, res) => {
//   const { code } = req.query;
//   try {
//     const accessTokenUrl =
//       "https://graph.facebook.com/v6.0/oauth/access_token?" +
//       `client_id=${FB_CLIENT_ID}&` +
//       `client_secret=${FB_CLIENT_SERECT}&` +
//       `redirect_uri=${encodeURIComponent(FB_CALLBACK_URL)}&` +
//       `code=${encodeURIComponent(code)}`;
//     const accessToken = await axios.get(accessTokenUrl);

//     if (!accessToken.data.access_token) {
//       return res.status(400).json({ message: `Failed to fetch token` });
//     }
//     let access_token = accessToken.data.access_token;

//     const user_data = await axios({
//       url: "https://graph.facebook.com/me",
//       method: "GET",
//       params: {
//         fields: ["id", "email", "first_name", "last_name"].join(","),
//         access_token: access_token,
//       },
//     });

//     const email = user_data.data.email;
//     const existing_user = await userCollection.findOne({ email });

//     if (existing_user) {
//       return res.status(200).json(
//         response({
//           success: true,
//           message: "User login successfully",
//           data: authResponse(existing_user),
//         })
//       );
//     }

//     // create user
//     const fullName = `${user_data.data.first_name} ${user_data.data.last_name}`;
//     const randomUserCode = (Math.random() + 1).toString(36).substring(7);

//     const data = {
//       firstName: user_data.data.first_name,
//       lastName: user_data.data.last_name,
//       email,
//       username: slugify(fullName) + randomUserCode,
//       password: null,
//     };
//     const user = await register(data);

//     if (!user)
//       return res
//         .status(500)
//         .json(response({ success: false, message: "User not created" }));

//     return res.status(201).json(
//       response({
//         success: true,
//         message: "User created successfully",
//         data: user,
//       })
//     );
//   } catch (error) {
//     return res.status(500).json(
//       response({
//         message: "Something went wrong wile processing this request",
//         success: false,
//       })
//     );
//   }
// };
