const Models = require('../models');
const bcrypt = require('bcrypt');


exports.response = (res, success, code, message, data) => {
	return res.status(code).json({
		success,
		message,
		data
	})
};

exports.getUserById = async (person_id) => {
	const t = Models.sequelize.transaction();
	const user = await Models.person.findOne({ where: { personid: person_id } }, { transaction: t })

	return user;
}

exports.hashAPassword = async (password) => {
	const salt = await bcrypt.genSalt(10)
	const hashed_password = await bcrypt.hash(password, salt)

	return { salt, hashed_password }
}

exports.checkDuplicateEmail = async (email) => {
	const existing_email = await Models.email.findOne({
		where: {
			email
		}
	})

	return existing_email
}

exports.generateUsername = async (username) => {
	console.log('username', username)
	const temp_username = username
	const quickGenerate = (temp_username) => {
		value = temp_username.trim()
		const number = Math.floor(1000 + Math.random() * 9000)
		console.log('number', number)
		username = value.substring(0, 4) + number;
		console.log('username', username)
		let new_result = username;
		return new_result
	}
	let result = quickGenerate(temp_username);
	console.log('result', result);
	const onlyUsername = await Models.accessuser.findOne({
		where: { username: result }
	})

	if (onlyUsername) {
		quickGenerate(8, temp_username)
	}

	return result
}
