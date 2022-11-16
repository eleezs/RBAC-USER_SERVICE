const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectfundswithdrawal.init(sequelize, DataTypes);
}

class projectfundswithdrawal extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    projectfundswithdrawalcomment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    availablefunds: {
      type: DataTypes.DECIMAL(19,4),
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
    schema: 'app',
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
    ]
  });
  }
}
