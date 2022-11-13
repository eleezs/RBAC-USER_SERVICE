"use strict";

module.exports = (sequelize, DataTypes) => {
	const PersonAddresss = sequelize.define("person_addresss", {
		person_address_id: {
			allowNull: false,
				primaryKey: true,
				type: DataTypes.BIGINT,
				defaultValue: DataTypes.BIGINT,
		  },
		  person_id: {
			type: DataTypes.BIGINT
		  },
		  address_id: {
			type: DataTypes.BIGINT
		  },
		  is_primary: {
			type: DataTypes.BOOLEAN
		  },
		  created_by: {
			type: DataTypes.STRING
		  },
		  updated_by: {
			type: DataTypes.STRING
		  },

	})
	return PersonAddresss
}