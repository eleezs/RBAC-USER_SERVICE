'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("person_email", {
    person_email_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      defaultValue: Sequelize.BIGINT,
    },
    person_id: {
      type: Sequelize.BIGINT
    },
    email_id: {
      type: Sequelize.BIGINT
    },
    is_primary: {
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
   await queryInterface.dropTable("person_email");
  }
};
