const Models = require("../models");
const { response, getUserById, hashAPassword, checkDuplicateEmail, generateUsername } = require('../helper/utilityHelper');
const { Sequelize } = require('../models');
require('dotenv');

const { Op } = Sequelize

// Create and Save a new User
exports.createUser = async (req, res) => {

	const { first_name, last_name, email, phone, phone_code_id } = req.body;

	const t = await Models.sequelize.transaction();

	try {
		await checkDuplicateEmail(email)
		const user_email = await Models.email.create({ email, createdby: `${first_name} ${last_name}` }, { transaction: t });
		console.log('user_email', user_email)
		const username = await generateUsername(first_name + last_name)
		const person = await Models.person.create({
			firstName: first_name,
			lastNname: last_name
		}, { transaction: t });

		const userNumber = await Models.phonenumber.create({
			phonecodeid: phone_code_id,
			phonenumber: phone,
			createdby: `${first_name} ${last_name}`
		}, { transaction: t })

		await Promise.all([
			Models.personphone.create({
				personid: person.personid,
				phonenumberid: userNumber.phonenumberid,
				isprimary: true,
				createdby: `${first_name} ${last_name}`
			}, { transaction: t }),

			user_email.update({ person_id: person.personid }, { transaction: t }),

			Models.personemail.create({
				personid: person.personid,
				emailid: user_email.emailid,
				isprimary: true,
				createdby: `${first_name} ${last_name}`
			}, { transaction: t }),

			Models.accessuser.create({
				personid: person.personid,
				username,
				createdby: `${first_name} ${last_name}`
			}, { transaction: t })
		])

		await t.commit();
		person.dataValues.email = user_email.dataValues.email;
		person.dataValues.phoneNumber = userNumber.dataValues.phonenumber;
		person.dataValues.username = username

		return response(res, true, 201, 'User created successfully', person);

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

// fill user bio
exports.updateUserBio = async (req, res) => {
	const { dob, gender, marital_status_id, city } = req.body;
	const { id } = req.params;

	const t = await Models.sequelize.transaction();

	try {
		const person = await getUserById(id);

		if (!person) {
			return response(res, false, 400, `No user with this Id: ${id}`);
		}

		await person.update({
			maritalstatustypeid: marital_status_id,
			gender,
			dateofbirth: dob,
			updatedby: `${person.firstname} ${person.lastname}`
		}, { transaction: t })

		const place = await Models.city.findOne({
			where: { cityid: city }
		}, { transaction: t })

		if (!place) {
			return response(res, false, 400, 'No city with such Id');
		}

		const my_city = await Models.address.create({
			addresstypeid: 1,
			cityid: city,
			addressline1: ' ',
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
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

//secure user account
exports.secureUserAccount = async (req, res) => {
	const { user_id, password, recovery_question_id1, recovery_question_id2, recovery_question_id3, recovery_question_id4, recovery_answer1, recovery_answer2, recovery_answer3, recovery_answer4 } = req.body;

	const t = await Models.sequelize.transaction();

	try {
		const { salt, hashed_password } = await hashAPassword(password)
		const user = await Models.accessuser.findOne({
			where: { personid: user_id },
			include: [Models.person]
		}, { transaction: t })

		if (!user) {
			return response(res, true, 404, 'User not found')
		}
		console.log(user)

		const question = [recovery_question_id1, recovery_question_id2, recovery_question_id3, recovery_question_id4]
		const answer = [recovery_answer1, recovery_answer2, recovery_answer3, recovery_answer4]
		console.log(' user.accessuser.dataValues||||||||||||.',  user.accessuserid)
		for (let i = 0; i < question.length; i++) {
			await Models.userrecoveryquestion.create({
				accessuserid: user.accessuserid,
				recoveryquestionid: question[i],
				answer: answer[i],
				created_by: `${user.person.dataValues.firstname} ${user.person.dataValues.lastname}`
			}, { transaction: t })
		}

		await Models.userlogin.create({
			accessuserid: user.accessuserid,
			passwordsalt: salt,
			passwordhash: hashed_password,
			createdby: `${user.person.dataValues.firstname} ${user.person.dataValues.lastname}`,
			personid: user.person.dataValues.personid
		}, { transaction: t })

		await t.commit();

		return response(res, true, 201, 'User security updated')

	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

//update user Access
exports.updateUserAccess = async (req, res) => {
	const { username } = req.body;

	const t = await Models.sequelize.transaction();

	try {
		const user_id = req.user.id
		const user = await getUserById(userId)
		await Models.accessuser.update({
			username,
			updatedby: `${user.firstname} ${user.lastname}`
		}, { where: { personid: req.user.id } }, { transaction: t })

		return response(res, true, 201, 'User access updated!')
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

// Retrieve all Users from the database.
exports.getAllUsers = async (req, res) => {
	const t = await Models.sequelize.transaction();
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
	const t = await Models.sequelize.transaction();

	try {
		const user =  await Models.person.findOne({
			where: { personid: id },
			include: [
				{
					model: Models.personemail,
					include: [
						{
							model: Models.email,
						}
					]
				},
				{
					model: Models.accessuser,
					include: [{ 
						model: Models.userlogin,
						required: false
					}]
				}
			]

		}, { transaction: t })

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
	const t = await Models.sequelize.transaction();

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
	const { id, country, code } = req.body
	let where;
	if (id) {
		where = { countryid: id }
	} else if (country) {
		where = { country : { [Op.iLike]: `%${country}%` }}
	} else if (code) {
		where = { code : { [Op.iLike]: `%${code}%` }}
	} else {
		where = {}
	}

	const t = await Models.sequelize.transaction();

	try {
		const place = await Models.country.findAll({
			where
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'Country returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

// get state
exports.getState = async (req, res) => {
	const { id, countryId } = req.body
	let where;
	if (id) {
		where = { countrystateid: id }
	} else if (countryId) {
		where = { countryid : countryId }
	} else {
		where = {}
	}

	const t = await Models.sequelize.transaction();

	try {
		const place = await Models.countrystate.findAll({
			where
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'State returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

// get city
exports.getCity = async (req, res) => {
	const { id, cityId } = req.body
	let where;
	if (id) {
		where = { countrystateid: id }
	} else if (cityId) {
		where = { cityid : cityId }
	} else {
		where = {}
	}

	const t = await Models.sequelize.transaction();

	try {
		const place = await Models.city.findAll({
			where
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'City returned succesfully', place)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

//update address
exports.updateUserAddress = async (req, res) => {
	const { addresstypeid, cityid, addressline1, addressline2, streetnumber, buildingnumber, description } = req.body;

	const t = await Models.sequelize.transaction();

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

// get phone code
exports.getPhonecode = async (req, res) => {
	const { id, countryId, countryCode } = req.body
	let where;

	if(id){
		where = { phonecodeid: id }
	} else if (countryId) {
		where = { countryid: countryId}
	} else if (countryCode) {
		where = { countrycode : { [Op.iLike]: `%${countryCode}%` }}
	} else {
		where = {}
	}

	const t = await Models.sequelize.transaction();

	try {
		const phoneCode = await Models.phonecode.findAll({
			where
		}, { transaction: t })

		await t.commit()
		return response(res, true, 200, 'Phone code returned succesfully', phoneCode)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Something went wrong while processing this request');
	}
}

// get all questions
exports.getAllActiveRecoveryQuestion = async (req, res) => {
  const t = Models.sequelize.transaction();

  try {
    questions = await Models.recoveryquestion.findAll({})

    return response(res, true, 200, 'Active recovery questions fetched successfuly', questions)
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error Occured!')
  }
}

//create update for bio