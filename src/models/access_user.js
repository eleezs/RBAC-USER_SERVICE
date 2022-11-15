'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class accessUser extends Model {

        static associations(models) {
            //define association here
            accessUser.belongsTo(models.person, {
                foreignKey: person_id
            })
        }
    };

    const accessUser = sequelize.define("access_user", {
        access_user_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        person_id: {
            type: DataTypes.BIGINT
        },
        user_type_id: {
            type: DataTypes.SMALLINT
        },
        username: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return accessUser;
};