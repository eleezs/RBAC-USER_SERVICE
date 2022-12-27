const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('walletbalanceevent', {
    walletbalanceeventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bookbalance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
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
    schema: 'public',
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
      {
        name: "walletbalanceevent_pkey",
        unique: true,
        fields: [
          { name: "walletbalanceeventid" },
        ]
      },
    ]
  });
};
