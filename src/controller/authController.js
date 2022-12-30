const sequelize = require('../../models');
const Models = require("../../models");
require('dotenv')
const bcrypt = require("bcrypt");
const { response } = require('../helper/utilityHelper');
const { getGoogleAuthURL, callBackAction } = require('../helper/authHelper');
const Redis = require('../config/redis');
const { generateToken } = require('../middleware/authenticate');

require('dotenv');

const client = Redis.redisClient();

exports.login = async (req, res, next) => {

	let googleSign, email, password;

	if (req.query.code) {
		googleSign = await callBackAction(req, res, next)

		email = googleSign.email
		name = googleSign.name
	
		console.log(googleSign)
	} else {
		email = req.body.email
		password = req.body.password;
	}

	const t = await Models.sequelize.transaction();

	try {
		const required = false
		const user_details = await Models.email.findOne({
			where: { email },
			include: [
				{
					model: Models.personemail,
					include: [
						{
							model: Models.person,
							include: [
								{
									model: Models.accessuser,
									include: [{ 
										model: Models.userlogin,
										required
									}]
								}
							]
						}
					]
				}
			]

		}, { transaction: t })

		if (!user_details) {
			return response(res, false, 404, 'User Not found.')
		}

		const user = user_details.personemail?.person
		const user_login_details = user.accessuser?.userlogins

		if (!googleSign) {
			let passwordIsValid = bcrypt.compareSync(password, user_login_details[0]?.dataValues.passwordhash);

			if (!passwordIsValid) {
				return response(res, false, 400, "Invalid Password/username!")
			};
		}

		let token = generateToken(
			{
				id: user.personid,
				firstName: !googleSign ? user.firstName : googleSign.name,
				email: email
			}
		);

		await Models.userloginhistory.create({
			accesstoken: token,
			userloginid: user_login_details[0]?.dataValues.userloginid
		}, { transaction: t })

		await t.commit();
    await client.setEx(`user_token_${user.personid}`, 1800, token)
    return response(res, true, 200, 'Your login was successful', {
      userId: user.id,
			accessToken: token
    })
	} catch (e) {
		await t.rollback();
		console.log(e);
    return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

exports.logout = async (req, res) => {
	try {
		await client.DEL(`customer_token_${req.user.id}`);
		return response(res, true, 200, "User logout was successful")
	} catch (e) {
		console.log(e);
		return response(res, false, 500, 'Error occurred', e);
	}
}

// signin and signup with google
exports.googleSignUp = async (req, res) => {
	return res.send(getGoogleAuthURL());;
}