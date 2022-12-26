const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currency', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "currency_pkey",
        unique: true,
        fields: [
          { name: "currencyid" },
        ]
      },
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
};
