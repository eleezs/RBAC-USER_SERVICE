const { sequelize } = require('../models');
const Models = require('../models');
const access_user = require('../models/access_user');
const person = require('../models/person');
const bcrypt = require('bcrypt')

exports.response = (res, success, code, message, data) => {
    return res.status(code).json({
        success,
        message,
        data
    })
};
  
exports.getUserById = async (person_id) => {
    const t = sequelize.transaction ();
    const user = await person.findOne({ where: { person_id: person_id } }, { transaction: t })

    if (!user) {
        throw new Error('user not found')
    }
    return user;
}

exports.generateUsername = async (username) => {
    let result = ' ';
    value = username
    const createUsername = (length = 8, value) => {
        value = value + '0123456789';
        let characterLength = value.length;

        for (let i = 0; i < length; i++) {
            result += value.charAt(Math.floor(Math.random() * characterLength))
        }
        return result
    }
   

    const checkDuplicateUsername = await access_user.findOne({ where: { username: result } } )

    if (checkDuplicateUsername) {
        createUsername(8, value)
    }
    return result;
}

exports.hashAPassword = async (password) => {
 const salt = bcrypt.genSalt(10)
 const hashedPassword = await bcrypt.hash(password, salt) 

 return { salt, hashedPassword }
}
