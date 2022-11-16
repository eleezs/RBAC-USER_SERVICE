const sequelize = require ('../config/database');
const Models = require("../models");
const { response, getUserById, hashAPassword } = require('../helper/utilityHelper');
require('dotenv');

// Create and Save a new User
exports.createUser = async (req, res) => {    
    // Create a User
    const { firstName, lastName, email, phone, phoneCodeId } = req.body;
    
    const t = await sequelize.transaction ();

    // Save User in the database
    try {
        const userEmail = await Models.email.create({ email, createdby: `${firstName} ${lastName}` }, { transaction: t });

        const person = await Models.person.create({
            firstname: firstName,
            lastname: lastName
        }, { transaction: t });

        const userNumber = await Models.phonenumber.create({ 
            phonecodeid: phoneCodeId,
            phonenumber: phone,
            createdby: `${firstName} ${lastName}`
        }, { transaction: t })

        await Models.personphone.create({
            personid: person.personid,
            phonenumberid: userNumber.phonenumberid,
            isprimary: true,
            created_by: `${firstName} ${lastName}`
        }, { transaction: t })

        await userEmail,update({ person_id: person.personid })
        
        await t.commit();
        person.dataValues.email = userEmail.dataValues.email;
        person.dataValues.phoneNumber = userNumber.dataValues.phonenumber;

        return response(res, true, 201, 'User created successfully', person);
       
    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error occurred');
    }
}

// fill user bio
exports.updateUserBio = async (req, res) => {
    const { userId, dob, gender, maritalStatusId } = req.body;

    const t = await sequelize.transaction ();

    try {
        const person = await response.getUserById(userId);
        await person.update({
            maritalstatustypeid: maritalStatusId,
            gender,
            dateofbirth: dob,
            updated_by: `${person.firstname} ${person.lastname}`
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
        const user = await Models.accessuser.findOne({ 
            where: { personid: userId },
            include: [person]
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

//create user Access
exports.createUserAccess = async(req, res) => {
    const { userId, userTypeId, username } = req.body;

    const t = await sequelize.transaction ();

    try {
        const user = await getUserById(userId)
        const admin = await getUserById(req.user.id)
        const userAccess = await Models.accessuser.create({
            personid: userId,
            usertypeid: userTypeId,
            username,
            created_by: `${admin.firstname} ${admin.lastname}`
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
        let data = await Models.person.findAll({transaction: t});

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
        let data = await Models.person.destroy({ where: { personid: id } }, { transaction: t } );

        if(!data){
            return response(res, false, 404, "User with the specified ID does not exists");
        }

        await Models.accessuser.destroy({ where: { personid: id } }, { transaction: t })

        await t.commit();
        return response(res, true, 200, 'user data deleted successfully')
    } catch (e) {
        await t.rollback();
        console.log(e);
        res.status(500).send({message: "Could not delete User with id=" + id, e});
    }
};