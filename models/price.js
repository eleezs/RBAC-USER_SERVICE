const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price', {
    priceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pricechange: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    volume: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    transactions: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timeminute: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timehour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datemonth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateyear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timewindowid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    logreasonid: {
      type: DataTypes.SMALLINT,
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
    tableName: 'price',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_price_item",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "idx_fk_price_logreason",
        fields: [
          { name: "logreasonid" },
        ]
      },
      {
        name: "idx_fk_price_timewindow",
        fields: [
          { name: "timewindowid" },
        ]
      },
      {
        name: "pk_price",
        unique: true,
        fields: [
          { name: "priceid" },
        ]
      },
      {
        name: "price_pkey",
        unique: true,
        fields: [
          { name: "priceid" },
        ]
      },
    ]
  });
};
