'use strict';

module.exports = (sequelize, DataTypes) => {
	const Country = sequelize.define("country", {
		country_id: {
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.BIGINT,
		},
		country_state_id: {
			type: DataTypes.BIGINT
		},
		code: {
			type: DataTypes.STRING
		},
		country: {
			type: DataTypes.STRING
		},
		created_by: {
			type: DataTypes.STRING
		},
		updated_by: {
			type: DataTypes.STRING
		}
	});
	
	return Country;
};