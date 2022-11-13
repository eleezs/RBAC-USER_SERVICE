'use strict';

module.exports = (sequelize, DataTypes) => {
    const userLoginHistory = sequelize.define("user_login_history", {
        user_login_history_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        access_token: {
            type: DataTypes.SMALLINT
        },
        user_login_id: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },   
        updated_by: {
            type: DataTypes.STRING
      },
    });
    
    return userLoginHistory;
};