const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transactionfee.init(sequelize, DataTypes);
}

class transactionfee extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transactionfeeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    percentage: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    effectivedate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    enddate: {
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
    tableName: 'transactionfee',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_transactionfee",
        unique: true,
        fields: [
          { name: "transactionfeeid" },
        ]
      },
    ]
  });
  }
}
