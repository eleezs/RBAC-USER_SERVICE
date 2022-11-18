const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transactionevent.init(sequelize, DataTypes);
}

class transactionevent extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transactioneventid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    transactiontypeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    walletbalanceeventid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    transactionstatustypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    transactionauthorizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuedon: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completedon: {
      type: DataTypes.DATE,
      allowNull: false
    },
    iscompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isrejected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rejectedreason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reversalreason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    netamount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(19,4),
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
    tableName: 'transactionevent',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_transactionevent_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_transactionevent_transactionauthorization",
        fields: [
          { name: "transactionauthorizationid" },
        ]
      },
      {
        name: "idx_fk_transactionevent_transactionstatustype",
        fields: [
          { name: "transactionstatustypeid" },
        ]
      },
      {
        name: "idx_fk_transactionevent_transactiontype",
        fields: [
          { name: "transactiontypeid" },
        ]
      },
      {
        name: "idx_fk_transactionevent_walletbalanceevent",
        fields: [
          { name: "walletbalanceeventid" },
        ]
      },
      {
        name: "pk_transactionevent",
        unique: true,
        fields: [
          { name: "transactioneventid" },
        ]
      },
    ]
  });
  }
}
