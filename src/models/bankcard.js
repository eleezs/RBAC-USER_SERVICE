const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bankcard.init(sequelize, DataTypes);
}

class bankcard extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankcardid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cardnumber: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    expirymonth: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    expiryyear: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    securitycode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    walletid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    cardissuerid: {
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
    tableName: 'bankcard',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_bankcard_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_bankcard_cardissuer",
        fields: [
          { name: "cardissuerid" },
        ]
      },
      {
        name: "idx_fk_bankcard_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_bankcard_wallet",
        fields: [
          { name: "walletid" },
        ]
      },
      {
        name: "pk_bankcard",
        unique: true,
        fields: [
          { name: "bankcardid" },
        ]
      },
    ]
  });
  }
}
