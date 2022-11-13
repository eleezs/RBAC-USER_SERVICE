'use strict';

module.exports = (sequelize, DataTypes) => {
	const Address = sequelize.define("address", {
		address_id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.BIGINT,
			defaultValue: DataTypes.BIGINT,
		},
		addresstypeid: {
			type: DataTypes.SMALLINT
		},
		city_id: {
			type: DataTypes.BIGINT
		},
		address_line_1: {
			type: DataTypes.STRING
		},
		address_line_2: {
			type: DataTypes.STRING
		},
		street_number: {
			type: DataTypes.STRING
		},
		building_number: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		created_by: {
			type: DataTypes.STRING
		},
		updated_by: {
			type: DataTypes.STRING
		}
	});

	return Address;
};