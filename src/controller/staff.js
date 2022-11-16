const { response } = require("../helper/utilityHelper");
const { Models, sequelize, RecoveryQuestion, roleType, userRole } = require("../models");


exports.getAllActiveRecoveryQuestion = async (req, res) => {
	const t = sequelize.transaction();

	try {
		questions = await RecoveryQuestion.findAll({})

		return response(res, true, 200, 'Active recovery questions fetched successfuly', questions)
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error Occured!')
	}
}

exports.createRole = async (req, res) => {
	const t = sequelize.transaction();
	const { role, description } = req.body 
	try {
		await roleType.create({
			role_type: role,
			description,
			created_by: `${req.user.id}`
		}, { transaction: t })

		await t.commit();
		return response(res, true, 200, 'Role created');
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error Occured!')
	}
}

exports.assignRole = async(req, res) => {
	const t = sequelize.transaction ();
	const { accessUserId, roleId, isActive, effectiveDate, endDate } = req.body;

 	try {
		await userRole.create({
			access_user_id: accessUserId,
			role_id: roleId,
			is_active: isActive,
			effective_date: effectiveDate,
			end_date: endDate
		}, { transaction: t })

		await t.commit();
		return response(res, true, 200, 'Role assigned to user successfully')
	} catch (e) {
		await t.rollback();
		console.log(e);
		return response(res, false, 500, 'Error Occured!')
	}
}