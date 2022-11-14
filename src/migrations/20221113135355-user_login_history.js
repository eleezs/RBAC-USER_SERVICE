'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("user_login_history", {
    user_login_history_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      defaultValue: Sequelize.BIGINT,
    },
    access_token: {
      type: Sequelize.STRING
    },
    user_login_id: {
      type: Sequelize.BIGINT
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
   await queryInterface.dropTable("user_login_history");
  }
};
