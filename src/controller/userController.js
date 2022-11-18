const sequelize = require('../models');
const Models = require("../models");
const { response, getUserById, hashAPassword, checkDuplicateEmail, generateUsername } = require('../helper/utilityHelper');
const personaddress = require('../models/personaddress');
require('dotenv');

// Create and Save a new User
exports.createUser = async (req, res) => {
	// Create a User
	const { firstName, lastName, email, phone, phoneCodeId } = req.body;

	const t = await sequelize.transaction();

	// Save User in the database
	try {
		checkDuplicateEmail(email)
		const userEmail = await Models.email.create({ email, createdby: `${firstName} ${lastName}` }, { transaction: t });
		const username = await generateUsername(firstName + lastName)
		const person = await Models.person.create({
			firstname: firstName,
			lastname: lastName
		}, { transaction: t });

		const userNumber = await Models.phonenumber.create({
			phonecodeid: phoneCodeId,
			phonenumber: phone,
			createdby: `${firstName} ${lastName}`
		}, { transaction: t })

		await Peomise.all([
			Models.personphone.create({
				personid: person.personid,
				phonenumberid: userNumber.phonenumberid,
				isprimary: true,
				createdby: `${firstName} ${lastName}`
			}, { transaction: t }),

			userEmail.update({ person_id: person.personid }),

			Models.personemail.create({
				personid: person.personid,
				emailid: userEmail.emailid,
				isprimary: true,
				createdby: `${firstName} ${lastName}`
			}),

			Models.accessuser.create({
				personid: person.personid,
				username,
				createdby: `${firstName} ${lastName}`
			})
		])

		await t.commit();
		person.dataValues.email = userEmail.dataValues.email;
		person.dataValues.phoneNumber = userNumber.dataValues.phonenumber;
		person.dataValues.username = username

		return response(res, true, 201, 'User created successfully', person);

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred');
	}
}

// fill user bio
exports.updateUserBio = async (req, res) => {
	const { userId, dob, gender, maritalStatusId, city } = req.body;

	const t = await sequelize.transaction();

	try {
		const person = await getUserById(userId);
		await person.update({
			maritalstatustypeid: maritalStatusId,
			gender,
			dateofbirth: dob,
			updatedby: `${person.firstname} ${person.lastname}`
		}, { transaction: t })

		const myCity = await Models.address.create({
			cityid: city,
			createdby: `${person.firstname} ${person.lastname}`
		}, { transaction: t })

		await Models.personaddress.create({
			personid: person.personid,
			addressid: myCity.addressid,
			isprimary: true,
			createdby: `${person.firstname} ${person.lastname}`
		}, { transaction: t })

		await t.commit()
		return response(res, true, 201, 'updated')
	} catch (err) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred');
	}
}

//secure user account
exports.secureUserAccount = async (req, res) => {
	const { userId, password, recoveryQuestionId1, recoveryQuestionId2, recoveryQuestionId3, recoveryQuestionId4, recoveryAnswer1, recoveryAnswer2, recoveryAnswer3, recoveryAnswer4 } = req.body;

	const t = await sequelize.transaction();

	try {
		const { salt, hashedPassword } = await hashAPassword(password)
		const user = await Models.accessuser.findOne({
			where: { personid: userId },
			include: [person]
		})

		if (!user) {
			return response(res, true, 404, 'User not found')
		}
		const question = [recoveryQuestionId1, recoveryQuestionId2, recoveryQuestionId3, recoveryQuestionId4]
		const answer = [recoveryAnswer1, recoveryAnswer2, recoveryAnswer3, recoveryAnswer4]

		const body = req.body; let temp_question; let temp_answer;

		question.forEach(field => {
			if (body.include(question)) {
				temp_question.push(field)
			}
		})

		answer.forEach(field => {
			if (body.include(answer)) {
				temp_answer.push(field)
			}
		})

		for (let i = 0; i < temp_question.length; i++) {
			await Models.userrecoveryquestion.create({
				accessuserid: user.access_user_id,
				recoveryquestionid: temp_question[i],
				answer: temp_answer[i],
				created_by: `${user.Person.firstname} ${user.Person.lastname}`
			}, { transaction: t })
		}

		await Models.userlogin.create({
			accessuserid: user.accessuser.id,
			passwordsalt: salt,
			passwordhash: hashedPassword,
			createdby: `${user.Person.firstname} ${user.Person.lastname}`
		})

		await t.commit();

		return response(res, true, 201, 'User security updated')

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred');
	}
}

//update user Access
exports.updateUserAccess = async (req, res) => {
	const { username } = req.body;

	const t = await sequelize.transaction();

	try {
		const user = await getUserById(userId)
		await Models.accessuser.update({
			username,
			updatedby: `${user.firstname} ${user.lastname}`
		}, { where: { personid: req.user.id } }, { transaction: t })

		return response(res, true, 201, 'User access updated!')
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred');
	}
}

// Retrieve all Users from the database.
exports.getAllUsers = async (req, res) => {
	const t = await sequelize.transaction();
	try {
		let data = await Models.person.findAll({}, { transaction: t });

		await t.commit();
		return response(res, true, 200, 'Users retrieved successfully', data)

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error occurred', e);
	}

};

// Find a single User with an id
exports.getUserById = async (req, res) => {
	const { id } = req.params;
	const t = await sequelize.transaction();

	try {
		const user = await getUserById(id)

		await t.commit();
		return response(res, true, 200, 'User retrieved successfully', user);

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, `Error retrieving User with id: ${id}`);
	}

};

// Delete a User with the specified id in the request
exports.deleteUser = async (req, res) => {
	const { id } = req.params;
	const t = await sequelize.transaction();

	try {
		let data = await Models.person.destroy({ where: { personid: id } }, { transaction: t });

		if (!data) {
			return response(res, false, 404, "User with the specified ID does not exists");
		}

		await Models.accessuser.destroy({ where: { personid: id } }, { transaction: t })

		await t.commit();
		return response(res, true, 200, 'user data deleted successfully')
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, `Error retrieving User with id: ${id}`);
	}
};

// get country
exports.getCountry = async (req, res) => {
	const { country } = req.body

	const t = await sequelize.transaction();

	try {
		const place = await Models.country.findAll({
			where: {
				country: { [Op.iLike]: `%${country}%` }
			}
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'Country returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, `Error retrieving User with id: ${id}`);
	}
}

// get state
exports.getState = async (req, res) => {
	const { id } = req.params

	const t = await sequelize.transaction();

	try {
		const place = await Models.countrystate.findAll({
			where: {
				countryid: id
			}
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'State returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, `Error retrieving User with id: ${id}`);
	}
}

// get city
exports.getCity = async (req, res) => {
	const { id } = req.params

	const t = await sequelize.transaction();

	try {
		const place = await Models.countrystate.findAll({
			where: {
				countrystateid: id
			}
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'City returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, `Error retrieving User with id: ${id}`);
	}
}

//update address
exports.updateUserAddress = async (req, res) => {
	const { addresstypeid, cityid, addressline1, addressline2, streetnumber, buildingnumber, description } = req.body;

	const t = await sequelize.transaction();

	try {
		const user = await getUserById(req.user.id)
		const required = false
		const myAddress = await Models.personaddress.findOne({
			where: { personid },
			include: [{ model: Models.address, required}]
		})

		if(!myAddress) {
			await Models.address.create({
				addresstypeid,
				cityid,
				addressline1: !addressline1 ? null : addressline1,
				addressline2: !addressline2 ? null : addressline2,
				streetnumber: !streetnumber ? null : streetnumber,
				buildingnumber: !buildingnumber ? null : buildingnumber,
				description: !description ? null : description
			}, { transaction: t })
		} else {
			await Models.address.update({
				addresstypeid,
				cityid,
				addressline1: !addressline1 ? null : addressline1,
				addressline2: !addressline2 ? null : addressline2,
				streetnumber: !streetnumber ? null : streetnumber,
				buildingnumber: !buildingnumber ? null : buildingnumber,
				description: !description ? null : description
			}, { transaction: t })
		}
		await t.commit();
		return response(res, true, 200, 'User data updated')

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong');
	}
}