const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('selllistingtrade', {
    selllistingtradeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    selllistingid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tradeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    acceptedon: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rejectedon: {
      type: DataTypes.DATE,
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
    tableName: 'selllistingtrade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_selllistingtrade_selllisting",
        fields: [
          { name: "selllistingid" },
        ]
      },
      {
        name: "idx_fk_selllistingtrade_trade",
        fields: [
          { name: "tradeid" },
        ]
      },
      {
        name: "pk_selllistingtrade",
        unique: true,
        fields: [
          { name: "selllistingtradeid" },
        ]
      },
      {
        name: "selllistingtrade_pkey",
        unique: true,
        fields: [
          { name: "selllistingtradeid" },
        ]
      },
    ]
  });
};
