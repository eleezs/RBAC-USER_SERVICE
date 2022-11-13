'use strict';

module.exports = (sequelize, DataTypes) => {
    const recoveryQuestion = sequelize.define("recovery_question", {
        recovery_question_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.SMALLINT,
            defaultValue: DataTypes.SMALLINT,
        },
        question: {
            type: DataTypes.STRING
        },
        is_active: {
            type: DataTypes.BOOLEAN
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });
    
    return recoveryQuestion;
};