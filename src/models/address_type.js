'use strict';

module.exports = (sequelize, DataTypes) => {
    const addressType = sequelize.define("address_type", {
        address_type_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            defaultValue: DataTypes.SMALLINT,
        },
        code: {
            type: DataTypes.STRING
        },
        address_type: {
            type: DataTypes.STRIING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return addressType;
};