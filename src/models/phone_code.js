'use strict';

module.exports = (sequelize, DataTypes) => {
    const phoneCode = sequelize.define("phone_code", {
        phone_code_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            defaultValue: DataTypes.SMALLINT,
        },
        country_id: {
            type: DataTypes.SMALLINTINT
        },
        country_code: {
            type: DataTypes.STRING
        },
        area_code: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return phoneCode;
};