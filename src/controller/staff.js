const { response } = require("../helper/utitlyHelper");
const { Models, sequelize, RecoveryQuestion } = require("../models");


exports.getAllActiveRecoveryQuestion = async(req, res) => {
    const t = sequelize.transaction ();

    try {
        questions = await RecoveryQuestion.findAll({})

        return response(res, true, 200, 'Active recovery questions fetched successfuly', questions)
    } catch (e) {
        await t.rollback();
        console.log(e);
        return response(res, false, 500, 'Error Occured!')
    }
}