const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return address.init(sequelize, DataTypes);
}

class address extends Sequelize.Model {
	static associate(models) {
		address.belongsTo(models.personaddress, {
			foreignKey: 'addressid'
		}),

		address.belongsTo(models.city, {
			foreignKey: 'cityid'
		})
	}

  static init(sequelize, DataTypes) {
  return super.init({
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addresstypeid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressline1: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    addressline2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    streetnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    buildingnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
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
    tableName: 'address',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_address_addresstype",
        fields: [
          { name: "addresstypeid" },
        ]
      },
      {
        name: "idx_fk_address_city",
        fields: [
          { name: "cityid" },
        ]
      },
      {
        name: "pk_address",
        unique: true,
        fields: [
          { name: "addressid" },
        ]
      },
    ]
  });
  }
}
