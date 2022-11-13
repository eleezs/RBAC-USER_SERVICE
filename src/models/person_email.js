'use strict';

module.exports = (sequelize, DataTypes) => {
    const personEmail = sequelize.define("person_email", {
        person_email_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        person_id: {
            type: DataTypes.BIGINT
        },
        email_id: {
            type: DataTypes.BIGINT
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
    
    return personEmail;
};