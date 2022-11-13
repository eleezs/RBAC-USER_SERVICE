'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("person_address", {
      person_address_id: {
        allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
      },
      person_id: {
        type: Sequelize.BIGINT
      },
      address_id: {
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
    await queryInterface.dropTable("person_address")
  }
};
