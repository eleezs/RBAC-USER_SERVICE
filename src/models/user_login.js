'use strict';

module.exports = (sequelize, DataTypes) => {
    const userLogin = sequelize.define("user_login", {
        user_login_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        access_user_id: {
            type: DataTypes.BIGINT
        },
        password_salt: {
            type: DataTypes.STRING
        },
        password_hash: {
            type: DataTypes.STRING
        },
        access_tokem: {
            type: DataTypes.STRING
        },
        expired_on: {
            type: DataTypes.DATE
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return userLogin;
};