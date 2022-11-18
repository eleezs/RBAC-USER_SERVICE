const { sequelize } = require('../models');
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
    const t = sequelize.transaction ();
    const user = await Models.person.findOne({ where: { personid: person_id } }, { transaction: t })

    if (!user) {
        throw new Error('user not found')
    }
    return user;
}

exports.hashAPassword = async (password) => {
 const salt = bcrypt.genSalt(10)
 const hashedPassword = await bcrypt.hash(password, salt) 

 return { salt, hashedPassword }
}

exports.checkDuplicateEmail = async (email) => {
    const existingEmail = await Models.email.findOne({
        where: {
            email
        }
    })

    if(existingEmail) {
        throw new Error("This is email is already in use")
    }

    return true;
}

exports.generateUsername = async(username) => {
  let result;
  const temp_username = username
  const quickGenerate = (temp_username) => {
    value = temp_username.trim()
    const number = Math.floor(1000 + Math.random() * 9000)
    username = value.substring(0, 4) + number.slice();
    return result = username + number
  }

  const onlyUsername = await Models.accessuer.findOne({
    where: { username: result }
  })

  if(onlyUsername) {
    quickGenerate(8, temp_username)
  }

  return result
}
