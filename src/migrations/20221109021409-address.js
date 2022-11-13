'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("address", {
      address_id: {
        allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
      },
      address_type_id: {
        type: Sequelize.SMALLINT
      },
      city_id: {
        type: Sequelize.BIGINT
      },
      address_line_1: {
        type: Sequelize.STRING
      },
      address_line_2: {
        type: Sequelize.STRING
      },
      street_number: {
        type: Sequelize.STRING
      },
      building_number: {
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
    await queryInterface.dopTable("address")
  }
};
