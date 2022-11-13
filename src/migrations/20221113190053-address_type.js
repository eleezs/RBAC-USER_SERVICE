'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("address_type", {
			address_type_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.SMALLINT,
				defaultValue: Sequelize.SMALLINT,
			},
			code: {
				type: Sequelize.STRING
			},
			address_type: {
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
		await queryInterface.dropTable("access_user");
	}
};
