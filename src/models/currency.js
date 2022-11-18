const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return currency.init(sequelize, DataTypes);
}

class currency extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    symbol: {
      type: DataTypes.TEXT,
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
    tableName: 'currency',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_currency_country",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "pk_currency",
        unique: true,
        fields: [
          { name: "currencyid" },
        ]
      },
    ]
  });
  }
}
