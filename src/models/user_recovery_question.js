'use strict';

module.exports = (sequelize, DataTypes) => {
    const userRecoveryQuestion = sequelize.define("user_recovery_question", {
        user_recovery_question_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            defaultValue: DataTypes.BIGINT,
        },
        access_user_id: {
            type: DataTypes.BIGINT
        },
        recovery_question_id: {
            type: DataTypes.SMALLINT
        },
        answer: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return userRecoveryQuestion;
};