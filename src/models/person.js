const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	return person.init(sequelize, DataTypes);
}

class person extends Sequelize.Model {

	static associate(models) {
		person.hasOne(models.accessuser, {
			foreignKey: 'accessuserid'
		}),

			person.hasMany(models.personemail, {
				foreignKey: 'personid'
			}),

			person.hasOne(models.personaddress, {
				foreignKey: 'personid'
			})
	}

	static init(sequelize, DataTypes) {
		return super.init({
			personid: {
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			maritalstatustypeid: {
				type: DataTypes.SMALLINT,
				allowNull: true
			},
			firstname: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			middlename: {
				type: DataTypes.STRING(255),
				allowNull: true
			},
			lastname: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			dateofbirth: {
				type: DataTypes.DATEONLY,
				allowNull: true
			},
			gender: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			createdon: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
			},
			createdby: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: "SESSION_USER"
			},
			updatedon: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedby: {
				type: DataTypes.STRING(200),
				allowNull: true,
				defaultValue: "SESSION_USER"
			}
		}, {
			sequelize,
			tableName: 'person',
			schema: 'app',
			timestamps: false,
			indexes: [
				{
					name: "idx_fk_person_maritalstatustype",
					fields: [
						{ name: "maritalstatustypeid" },
					]
				},
				{
					name: "pk_person",
					unique: true,
					fields: [
						{ name: "personid" },
					]
				},
			]
		});
	}
}
