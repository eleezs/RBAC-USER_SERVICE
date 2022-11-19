const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return country.init(sequelize, DataTypes);
}

class country extends Sequelize.Model {
	static associate (models) {
		country.hasMany(models.countrystate, {
			foreignKey: 'countryid'
		}),

		country.hasOne(models.phonecode, {
			foreignKey: 'countryid'
		})
	}

  static init(sequelize, DataTypes) {
  return super.init({
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'country',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_country",
        unique: true,
        fields: [
          { name: "countryid" },
        ]
      },
    ]
  });
  }
}
