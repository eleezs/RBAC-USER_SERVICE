'use strict';

module.exports = (sequelize, DataTypes) => {
    const maritalStatusType = sequelize.define("marital_status_type", {
        marital_status_type_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            defaultValue: DataTypes.SMALLINT,
        },
        code: {
            type: DataTypes.STRING
        },
        marital_status_type: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return maritalStatusType;
};