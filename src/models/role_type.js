'use strict';

module.exports = (sequelize, DataTypes) => {
    const roleType = sequelize.define("role_type", {
        role_type_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            defaultValue: DataTypes.SMALLINT,
        },
        role_type: {
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
    
    return roleType;
};