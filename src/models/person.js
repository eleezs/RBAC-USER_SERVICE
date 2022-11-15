'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class person extends Model {

        static associations(models) {
            //define association here
            person.hasMany(models.person, {
                foreignKey: email_id
            }),

            person.hasOne(models.access_user, {

            })
        }
    };

    const Person = sequelize.define("person", {
        person_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        email_id: {
            type: DataTypes.BIGINT,
        },
        access_user_id: {
            type: DataTypes.BIGINT,
        },
        marital_status_type_id: {
            type: DataTypes.SMALLINT
        },
        first_name: {
            type: DataTypes.STRING
        },
        middle_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        date_of_birth: {
            type: DataTypes.DATE
        },
        gender: {
            type: DataTypes.STRING
        },
        country_id: {
            type: DataTypes.BIGINT
        },
        country_state_id: {
            type: DataTypes.BIGINT
        },
        city_id: {
            type: DataTypes.BIGINT
        },
        created_by: {
            type: DataTypes.STRING
        }
    });
    
    return Person;
};