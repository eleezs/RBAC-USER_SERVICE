'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class userRole extends Model {

        static associations(models) {
            //define association here
           
        }
    };

    const userRole = sequelize.define("user_role", {
        user_role_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        access_user_id: {
            type: DataTypes.BIGINT
        },
        role_id: {
            type: DataTypes.SMALLINT
        },
        is_active: {
            type: DataTypes.BOOLEAN
        },
        effective_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return userRole;
};