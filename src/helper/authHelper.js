const Models = require("../models");
const Axios = require("axios");
const querystring = require('query-string');
const  sequelize = require("../models");
const { checkDuplicateEmail } = require("./utilityHelper");

require('dotenv');
const { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const params = new URLSearchParams()

exports.getGoogleAuthURL = () => {
	const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
	const options = {
		redirect_uri: 'http://localhost:5010/user-service/api/v1/auth/google/callback',
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

	const res = await Axios({
		method: 'POST',
		url,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		data: querystring.stringify(values)
	}).catch((error) => {
		console.error(`Failed to fetch auth tokens`);
		throw new Error(error.message);
	});

	if(!res){
		throw new Error("something went wrong")
	}
	console.log(res.data)
	return res.data;
}

// Getting the user from Google with the code
exports.callBackAction = async (req, res) => {
	const code = req.query.code;

	const { id_token, access_token } = await getTokens({
		code,
		clientId: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		redirectUri: GOOGLE_CALLBACK_URL,
	});
	// const { tokens } = await oauth2Client.getToken(code);
	// Fetch the user's profile with the access token and bearer
	const googleUser = await Axios({
		method: "GET",
		url:  `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
		headers: {
			Authorization: `Bearer ${id_token}`,
		}
	}).catch((error) => {
			console.error(`Failed to fetch user`);
			throw new Error(error.message);
		});

		if(!googleUser) {
			throw new Error("Could not fetch user details")
		}
		console.log(googleUser.data.email)
		const { email, name } = googleUser.data

		const t = await sequelize.transaction ();

		try {
			checkDuplicateEmail(email)
			const userEmail = await Models.email.create({ email, createdby: `${name}`},  { transaction: t });
			const username = await generateUsername(name)
			const person = await Models.person.create({
				firstname: firstName,
				lastname: lastName
			}, { transaction: t });

			await Models.accessuser.create({
				personid: person.personid,
				username,
			}, { transaction: t })

			await userEmail.update({ personid: person.personid })

		} catch (e) {
			await t.rollback();
			console.log(e);
			return response(res, false, 500, 'Error occurred');
		}

		return { email, name };
}
