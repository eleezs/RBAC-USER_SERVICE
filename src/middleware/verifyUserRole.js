const { response } = require('../helper/utilityHelper')
const Models = require('../../models')


exports.verifyUserRole = () => {
	return async (req, res, next) => {
		try {
			const my_role = await Models.userrole.findOne({
				where: {
					access_user_id: req.user.id,
					is_active: true
				}
			})

			if (my_role) {
				next();
				return;
			}
		} catch (e) {
			console.log(e)
			return response(res, false, 401, "You don't hae the role to access this resource")
		}
	}
}