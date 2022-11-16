const { sequelize } = require('../models');
const Models = require('../models');
const access_user = require('../models/access_user');
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
    const user = await Models.person.findOne({ where: { person_id: person_id } }, { transaction: t })

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
