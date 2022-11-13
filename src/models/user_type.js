'use strict';

module.exports = (sequelize, DataTypes) => {
    const userType = sequelize.define("user_type", {
        user_type_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        code: {
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
    
    return userType;
};