'use strict';

module.exports = (sequelize, DataTypes) => {
    const accessUser = sequelize.define("access_user", {
        access_user_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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