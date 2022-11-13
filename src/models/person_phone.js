'use strict';

module.exports = (sequelize, DataTypes) => {
    const personPhone = sequelize.define("person_phone", {
        person_phone_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        person_id: {
            type: DataTypes.BIGINT
        },
        phone_number_id: {
            type: DataTypes.SMALLINT
        },
        is_primary: {
            type: DataTypes.BOOLEAN
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return personPhone;
};