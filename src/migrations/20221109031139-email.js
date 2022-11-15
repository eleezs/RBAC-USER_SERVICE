'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("email", {
    email_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      defaultValue: Sequelize.BIGINT,
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    person_id:{
      type: Sequelize.BIGINT,
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
   await queryInterface.dropTable("email");
  }
};
