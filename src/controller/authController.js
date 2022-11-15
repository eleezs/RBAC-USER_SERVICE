const sequelize = require('../config/database');
const { Models, Person, Email, phoneNumber, personPhone, accessUser, userRecoveryQuestion, userLogin } = require("../models");
require('dotenv')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { response } = require('../helper/utitlyHelper');

require('dotenv');

exports.login = async (req, res) => {
	const { payload } = req.body;
	const { email, password } = payload;

	const t = await sequelize.transaction();

	try {

	const user = await Email.findOne({ 
			where: { email },
			include: [Person] 
		
		},{ transaction: t })

		if (!user) {
			return response(res, true, 404, 'User Not found.')
		}

		let passwordIsValid = bcrypt.compare(
			user.password,
			password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		};

		let token = jwt.sign(
			{
				id: user.id,
				firstName: user.firstName
			},
			process.env.JWT_SECRET,
			{ expiresIn: 864000 }
		);

		await t.commit();
		res.status(200).json({
			userId: user.id,
			accessToken: token
		});
	} catch (e) {
		await t.rollback();
		console.log(e);
		res.status(500).json({ message: 'Error occurred', e });
	}
}

exports.logout = async (req, res) => {
	// Create a User

	const { accessToken } = req.accessToken;

	const t = await sequelize.transaction();

	// Save User in the database
	try {

		let logout = await accessToken.deleteToken(token);

		if (!logout) {
			return res.status(404).send({ message: "Unable to Logout User." });
		}
		await t.commit();
		res.status(200).json({
			message: "Logged out"
		});
	} catch (e) {
		await t.rollback();
		console.log(e);
		res.status(500).json({ message: 'Error occurred', e });
	}
}

exports.googleCallbackSuccess = async (req, res) => {
	console.log(req, 'from callback')
	if(!req.user) {
		res.redirect('/auth/callback/failure');
	}
	let token = jwt.sign(
		{
			id: req.user.id,
			firstName: req.user.firstName
		},
		process.env.SECRET,
		{ expiresIn: 864000 }
	);
	return response( res, true, 200, `Welcome ${req.user.email}`, token);
}

exports.googleCallbackFailure = async (req, res) => {
	return response( res, false, 400, 'Could not sign you in at this moment. Try again!');
}