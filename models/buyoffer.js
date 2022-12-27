const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buyoffer', {
    buyofferid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
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
    expireat: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isactive: {
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
    tableName: 'buyoffer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "buyoffer_pkey",
        unique: true,
        fields: [
          { name: "buyofferid" },
        ]
      },
      {
        name: "idx_fk_buyoffer_item",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "pk_buyoffer",
        unique: true,
        fields: [
          { name: "buyofferid" },
        ]
      },
    ]
  });
};
