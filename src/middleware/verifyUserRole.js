const { response } = require('../helper/utilityHelper')
const { userRole } = require('../models')


exports.verifyUserRole = (user_access_id) => {
	return async (req, res, next) => {
		try {
			const my_role = await userRole.findOne({
				where: {
					access_user_id: user_access_id,
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