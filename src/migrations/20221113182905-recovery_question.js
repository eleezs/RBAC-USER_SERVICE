'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("recovery_question", {
    recovery_question_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.SMALLINT,
      defaultValue: Sequelize.SMALLINT,
    },
    question: {
      type: Sequelize.STRING
    },
    is_active: {
      type: Sequelize.BOOLEAN
    },
    created_by: {
      type: Sequelize.STRING
    },
    created_on: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_by: {
      type: Sequelize.STRING
    },
    updated_on: {
        allowNull: false,
        type: Sequelize.DATE
    }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("recovery_question");
  }
};
