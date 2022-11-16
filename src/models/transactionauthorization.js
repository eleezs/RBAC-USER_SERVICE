const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transactionauthorization.init(sequelize, DataTypes);
}

class transactionauthorization extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transactionauthorizationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    autorizationkey: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    issuedon: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expireson: {
      type: DataTypes.DATE,
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
    tableName: 'transactionauthorization',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_transactionauthorization",
        unique: true,
        fields: [
          { name: "transactionauthorizationid" },
        ]
      },
    ]
  });
  }
}
