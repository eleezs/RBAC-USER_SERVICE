const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('portfolio', {
    portfolioid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tradeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    portfoliochange: {
      type: DataTypes.DECIMAL,
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
    tableName: 'portfolio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_portfolio_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_portfolio_logreason",
        fields: [
          { name: "logreasonid" },
        ]
      },
      {
        name: "idx_fk_portfolio_timewindow",
        fields: [
          { name: "timewindowid" },
        ]
      },
      {
        name: "idx_fk_portfolio_trade",
        fields: [
          { name: "tradeid" },
        ]
      },
      {
        name: "pk_portfolio",
        unique: true,
        fields: [
          { name: "portfolioid" },
        ]
      },
      {
        name: "portfolio_pkey",
        unique: true,
        fields: [
          { name: "portfolioid" },
        ]
      },
    ]
  });
};
