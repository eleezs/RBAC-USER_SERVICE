const Models = require("../models");
const Axios = require("axios");
const querystring = require('query-string');
const sequelize = require("../models");
const { checkDuplicateEmail, response } = require("./utilityHelper");

require('dotenv');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

exports.getGoogleAuthURL = () => {
	const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
	const options = {
		redirect_uri: "http://localhost:5010/user-service/api/v1/auth/user/login",
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
const getTokens = async ({ res, code, clientId, clientSecret, redirectUri }) => {
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
	console.log(res_value.data)
	return res_value.data;
}

// Getting the user from Google with the code
exports.callBackAction = async (req, res, next) => {
	const code = req.query.code;

	const token_value = await getTokens({
		res,
		code,
		clientId: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		redirectUri: "http://localhost:5010/user-service/api/v1/auth/user/login",
	});
	let  id_token, access_token, googleUser;
	if(token_value) {
		id_token =  token_value.id_token
		access_token  = token_value.access_token

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
	console.log(googleUser.data.email)
	const { email, name } = googleUser.data

	const t = await Models.sequelize.transaction();

	try {
		const exiting_email = await checkDuplicateEmail(email)
		if (!exiting_email) {
			const userEmail = await Models.email.create({ email, createdby: `${name}` }, { transaction: t });
			const username = await generateUsername(name)
			const person = await Models.person.create({
				firstname: name.split(' ')[0],
				lastname: name.split(' ')[1],
				createdby: `${name}`
			}, { transaction: t });

			await Models.accessuser.create({
				personid: person.personid,
				username,
				createdby: `${name}`
			}, { transaction: t })

			await userEmail.update({ personid: person.personid })
		}
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred');
	}

	return googleUser.data
}
