'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("user_recovery_question", {
    user_recovery_question_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      defaultValue: Sequelize.BIGINT,
    },
    access_user_id: {
      type: Sequelize.BIGINT
    },
    recovery_question_id: {
      type: Sequelize.SMALLINT
    },
    answer: {
      type: Sequelize.STRING
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
   await queryInterface.dropTable("user_recovery_question");
  }
};
