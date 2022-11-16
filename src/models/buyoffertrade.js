const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return buyoffertrade.init(sequelize, DataTypes);
}

class buyoffertrade extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    buyoffertradeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    buyofferid: {
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
    tableName: 'buyoffertrade',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_buyoffertrade_buyoffer",
        fields: [
          { name: "buyofferid" },
        ]
      },
      {
        name: "idx_fk_buyoffertrade_trade",
        fields: [
          { name: "tradeid" },
        ]
      },
      {
        name: "pk_buyoffertrade",
        unique: true,
        fields: [
          { name: "buyoffertradeid" },
        ]
      },
    ]
  });
  }
}
