'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("user_role", {
    user_role_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      defaultValue: Sequelize.BIGINT,
    },
    access_user_id: {
      type: Sequelize.BIGINT
    },
    role_id: {
      type: Sequelize.SMALLINT
    },
    is_active: {
      type: Sequelize.BOOLEAN
    },
    effective_date: {
      type: Sequelize.DATE
    },
    end_date:{
      type: Sequelize.DATE
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
   await queryInterface.dropTable("user_role");
  }
};
