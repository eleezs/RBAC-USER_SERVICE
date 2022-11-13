'use strict';

module.exports = (sequelize, DataTypes) => {
    const phoneNumber = sequelize.define("phone_number", {
        phone_number_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        phone_code_id: {
            type: DataTypes.BIGINT
        },
        phone_number: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return phoneNumber;
};