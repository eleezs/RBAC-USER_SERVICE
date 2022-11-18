const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return wallet.init(sequelize, DataTypes);
}

class wallet extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    walletid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bookbalance: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    bankbalance: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    islocked: {
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
    tableName: 'wallet',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_wallet_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_wallet_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_wallet_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_wallet_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_wallet",
        unique: true,
        fields: [
          { name: "walletid" },
        ]
      },
    ]
  });
  }
}
