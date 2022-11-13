const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	const Email = sequelize.define("email", {
		email_id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.BIGINT,
			defaultValue: DataTypes.BIGINT,
		},
		email: {
			type: DataTypes.STRING
		},
		created_by: {
			type: DataTypes.STRING
		},
		updated_by: {
			type: DataTypes.STRING
		}
	})
	return Email;
};