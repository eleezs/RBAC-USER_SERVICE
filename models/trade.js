const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trade', {
    tradeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    buyerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sellerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unitprice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    transactioneventid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sellergain: {
      type: DataTypes.DECIMAL,
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
    tableName: 'trade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_trade_accessuser_buyerid",
        fields: [
          { name: "buyerid" },
        ]
      },
      {
        name: "idx_fk_trade_accessuser_sellerid",
        fields: [
          { name: "sellerid" },
        ]
      },
      {
        name: "idx_fk_trade_item",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "idx_fk_trade_transactionevent",
        fields: [
          { name: "transactioneventid" },
        ]
      },
      {
        name: "pk_trade",
        unique: true,
        fields: [
          { name: "tradeid" },
        ]
      },
      {
        name: "trade_pkey",
        unique: true,
        fields: [
          { name: "tradeid" },
        ]
      },
    ]
  });
};
