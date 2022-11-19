const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return personaddress.init(sequelize, DataTypes);
}

class personaddress extends Sequelize.Model {
	static associate(models) {
		personaddress.belongsTo(models.person, {
			foreignKey: 'personid'
		}),

		personaddress.hasOne(models.address, {
			foreignKey: 'addressid'
		})
	}

  static init(sequelize, DataTypes) {
  return super.init({
    personaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isprimary: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'personaddress',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_personaddress_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_personaddress_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "pk_personaddress",
        unique: true,
        fields: [
          { name: "personaddressid" },
        ]
      },
    ]
  });
  }
}
