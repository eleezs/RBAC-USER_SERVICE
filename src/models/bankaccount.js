const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bankaccount.init(sequelize, DataTypes);
}

class bankaccount extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankaccountid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accountname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    routingnumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    swiftcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    walletid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bankaccounttypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bankid: {
      type: DataTypes.BIGINT,
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
    tableName: 'bankaccount',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_bankaccount_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_bankaccount_bank",
        fields: [
          { name: "bankid" },
        ]
      },
      {
        name: "idx_fk_bankaccount_bankaccounttype",
        fields: [
          { name: "bankaccounttypeid" },
        ]
      },
      {
        name: "idx_fk_bankaccount_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_bankaccount_wallet",
        fields: [
          { name: "walletid" },
        ]
      },
      {
        name: "pk_bankaccount",
        unique: true,
        fields: [
          { name: "bankaccountid" },
        ]
      },
    ]
  });
  }
}
