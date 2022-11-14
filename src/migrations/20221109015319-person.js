'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("person", {
			person_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
			},
			marital_status_type_id: {
				type: Sequelize.SMALLINT
			},
			first_name: {
				type: Sequelize.STRING
			},
			middle_name: {
				type: Sequelize.STRING
			},
			last_name: {
				type: Sequelize.STRING
			},
			date_of_birth: {
				type: Sequelize.DATE
			},
			gender: {
				type: Sequelize.STRING
			},
			country_id: {
				type: Sequelize.BIGINT
			},
			country_state_id: {
				type: Sequelize.BIGINT
			},
			city_id: {
				type: Sequelize.BIGINT
			},
			created_by: {
				type: Sequelize.STRING
			},
			created_on: {
				allowNull: false,
        		type: Sequelize.DATE
			},
			updated_by: {
				allowNull: false,
       			type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("person");
	}
};
