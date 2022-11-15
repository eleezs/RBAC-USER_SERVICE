const sequelize = require ('../config/database');
const { Models, Person, Email, phoneNumber, personPhone, accessUser, userRecoveryQuestion, userLogin } = require("../models");
const { response, getUserById, hashAPassword } = require('../helper/utitlyHelper');
require('dotenv');

// Create and Save a new User
exports.createUser = async (req, res) => {    
    // Create a User
    const { firstName, lastName, email, phone, phoneCodeId } = req.body;
    
    const t = await sequelize.transaction ();

    // Save User in the database
    try {
        const userEmail = await Email.create({ email, created_by: `${firstName} ${lastName}` }, { transaction: t });

        const person = await Person.create({
            first_name: firstName,
            last_name: lastName,
            email_id: userEmail.email_id
        }, { transaction: t });

        const userNumber = await phoneNumber.create({ 
            phone_code_id: phoneCodeId,
            phone_number: phone,
            created_by: `${firstName} ${lastName}`
        }, { transaction: t })

        await personPhone.create({
            person_id: person.person_id,
            phone_number_id: userNumber.phone_number_id,
            is_primary: true,
            created_by: `${firstName} ${lastName}`
        }, { transaction: t })

        await userEmail,update({ person_id: person.person_id })
        
        await t.commit();
        person.dataValues.email = userEmail.dataValues.email;
        person.dataValues.phoneNumber = userNumber.dataValues.phone_number;

        return response(res, true, 201, 'User created successfully', person);
       
    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error occurred');
    }
}

// fill user bio
exports.updateUserBio = async (req, res) => {
    const { userId, dob, gender, maritalStatusId, countryId, stateId, cityId } = req.body;

    const t = await sequelize.transaction ();

    try {
        const person = await response.getUserById(userId);
        await person.update({
            marital_status_type_id: maritalStatusId,
            gender,
            date_of_birth: dob,
            country_id: countryId,
            country_state_id: stateId,
            city_id: cityId,
            updated_by: `${person.first_name} ${person.last_name}`
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

    const t = await sequelize.transaction ();

    try {
        const { salt, hashedPassword } = await hashAPassword(password) 
        const user = await accessUser.findOne({ 
            where: { person_id: userId },
            include: [Person]
        })
        
        if(!user) {
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
            if(body.include(answer)) {
                temp_answer.push(field)
            }
        })
        
        for (let i = 0; i < temp_question.length; i++) {
            await userRecoveryQuestion.create({
              access_user_id: user.access_user_id,
              recovery_question_id: temp_question[i],
              answer: temp_answer[i],
              created_by: `${user.Person.first_name} ${user.Person.last_name}`
            }, { transaction: t })
        }

        await userLogin.create({ 
            access_user_id: user.access_user.id,
            password_salt: salt,
            password_hash: hashedPassword,
            created_by: `${user.Person.first_name} ${user.Person.last_name}`
        })

        await t.commit();

        return response(res, true, 201, 'User security updated')

    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error occurred');
    }
}

//create user Access
exports.createUserAccess = async(req, res) => {
    const { userId, userTypeId } = req.body;

    const t = await sequelize.transaction ();

    try {
        const user = await getUserById(userId)
        const admin = await getUserById(req.user.id)
        const userAccess = await accessUser.create({
            person_id: userId,
            user_type_id: userTypeId,
            username: generateUsername(username = user.first_name + user.last_name),
            created_by: `${admin.first_name} ${admin.last_name}`
        }, { transaction: t })

        return response(res, true, 201, 'User access created', userAccess)
    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error occurred');
    }
}

// Retrieve all Users from the database.
exports.getAllUsers = async (req, res) => {
    const t = await sequelize.transaction ();
    try {
        let data = await Person.findAll({transaction: t});

        await t.commit();
        return response(res, true, 200, 'Users retrieved successfully')
        
    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error occurred', e);
    }

};

// Find a single User with an id
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const t = await sequelize.transaction ();

    try {
        const user = await getUserById(id)

        await t.commit();
        return response(res, true, 200, 'User retrieved successfully', user);

    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, `Error retrieving User with id: ${id}`, e);
    }

};

// Delete a User with the specified id in the request
exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    const t = await sequelize.transaction ();

    try {
        let data = await Person.destroy({ where: { person_id: id } }, { transaction: t } );

        if(!data){
            return response(res, false, 404, "User with the specified ID does not exists");
        }

        await accessUser.destroy({ where: { person_id: id } }, { transaction: t })

        await t.commit();
        return response(res, true, 200, 'user data deleted successfully')
    } catch (e) {
        await t.rollback();
        console.log(e);
        res.status(500).send({message: "Could not delete User with id=" + id, e});
    }
};