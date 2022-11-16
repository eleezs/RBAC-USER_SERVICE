const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return walletbalanceevent.init(sequelize, DataTypes);
}

class walletbalanceevent extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    walletbalanceeventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bookbalance: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    walletid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ispending: {
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
    tableName: 'walletbalanceevent',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_walletbalanceevent_wallet",
        fields: [
          { name: "walletid" },
        ]
      },
      {
        name: "pk_walletbalanceevent",
        unique: true,
        fields: [
          { name: "walletbalanceeventid" },
        ]
      },
    ]
  });
  }
}
