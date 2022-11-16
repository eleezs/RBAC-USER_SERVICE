const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return selllistingtrade.init(sequelize, DataTypes);
}

class selllistingtrade extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
    ]
  });
  }
}
