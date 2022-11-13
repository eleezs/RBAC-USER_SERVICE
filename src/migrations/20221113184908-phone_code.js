'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("phone_code", {
			phone_code_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.SMALLINT,
				defaultValue: Sequelize.SMALLINT,
			},
			country_id: {
				type: Sequelize.SMALLINT
			},
			country_code: {
				type: Sequelize.STRING
			},
			area_code: {
				type: Sequelize.STRING
			},
			created_on: {
				allowNull: false,
				type: Sequelize.DATE
			},
			created_by: {
        type: Sequelize.STRING
			},
			updated_on: {
				allowNull: true,
				type: Sequelize.DATE
			},
			updated_by: {
        type: Sequelize.STRING
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("phone_code");
	}
};
