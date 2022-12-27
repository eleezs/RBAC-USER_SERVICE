const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectfundswithdrawal', {
    projectfundswithdrawalid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    projectfundswithdrawalcomment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    availablefunds: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    transactioneventid: {
      type: DataTypes.BIGINT,
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
    tableName: 'projectfundswithdrawal',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectfundswithdrawal_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_projectfundswithdrawal_transactionevent",
        fields: [
          { name: "transactioneventid" },
        ]
      },
      {
        name: "pk_projectfundswithdrawal",
        unique: true,
        fields: [
          { name: "projectfundswithdrawalid" },
        ]
      },
      {
        name: "projectfundswithdrawal_pkey",
        unique: true,
        fields: [
          { name: "projectfundswithdrawalid" },
        ]
      },
    ]
  });
};
