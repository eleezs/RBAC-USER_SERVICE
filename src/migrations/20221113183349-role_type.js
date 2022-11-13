'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("role_type", {
    role_type_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.SMALLINT,
      defaultValue: Sequelize.SMALLINT,
    },
    role_type: {
      type: Sequelize.STRING
    },
    description: {
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
   await queryInterface.dropTable("role_type");
  }
};
