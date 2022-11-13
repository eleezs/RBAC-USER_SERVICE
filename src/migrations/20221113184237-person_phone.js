'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("person_phone", {
			person_phone_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
			},
			person_id: {
				type: Sequelize.BIGINT
			},
			phone_number_id: {
				type: Sequelize.SMALLINT
			},
			is_primary: {
				type: Sequelize.BOOLEAN
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
		await queryInterface.dropTable("person_phone");
	}
};
