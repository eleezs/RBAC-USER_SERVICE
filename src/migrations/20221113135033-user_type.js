'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("user_type", {
    user_type_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.SMALLINT,
      defaultValue: Sequelize.SMALLINT,
    },
    code: {
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
   await queryInterface.dropTable("user_type");
  }
};
