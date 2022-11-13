'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user_login", {
			user_login_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.BIGINT,
				defaultValue: Sequelize.BIGINT,
			},
			access_user_id: {
				type: Sequelize.BIGINT
			},
			password_salt: {
				type: Sequelize.STRING
			},
			password_hash: {
				type: Sequelize.STRING
			},
			access_tokem: {
				type: Sequelize.STRING
			},
			expired_on: {
				type: Sequelize.DATE,
			},
			created_on: {
				allowNull: false,
				type: Sequelize.DATE
			},
			created_by: {
				allowNull: false,
        		type: Sequelize.DATE
			},
			updated_by: {
				allowNull: true,
        		type: Sequelize.DATE
			},
			ssouserid: {
				type: Sequelize.STRING
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("user_login");
	}
};
