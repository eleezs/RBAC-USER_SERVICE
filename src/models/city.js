const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return city.init(sequelize, DataTypes);
}

class city extends Sequelize.Model {
	static associate (models) {
		city.belongsTo(models.countrystate, {
			foreignKey: 'countrystateid'
		})
	}

  static init(sequelize, DataTypes) {
  return super.init({
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    countrystateid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    city: {
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
    tableName: 'city',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_city_countrystate",
        fields: [
          { name: "countrystateid" },
        ]
      },
      {
        name: "pk_city",
        unique: true,
        fields: [
          { name: "cityid" },
        ]
      },
    ]
  });
  }
}
