'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("phone_number", {
			phone_number_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
			},
			phone_code_id: {
				type: Sequelize.BIGINT
			},
			phone_number: {
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
		await queryInterface.dropTable("phone_number");
	}
};
