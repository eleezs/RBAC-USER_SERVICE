const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return phonecode.init(sequelize, DataTypes);
}

class phonecode extends Sequelize.Model {
	static associate(models) {
		phonecode.hasMany(models.phonenumber, {
			foreignKey: 'phonecodeid'
		})
	}
  static init(sequelize, DataTypes) {
  return super.init({
    phonecodeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    countrycode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    areacode: {
      type: DataTypes.CHAR(4),
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
    tableName: 'phonecode',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_phonecode_country",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "pk_phonecode",
        unique: true,
        fields: [
          { name: "phonecodeid" },
        ]
      },
      {
        name: "uk_phonecode_countrycode_areacode",
        unique: true,
        fields: [
          { name: "countrycode" },
          { name: "areacode" },
        ]
      },
    ]
  });
  }
}
