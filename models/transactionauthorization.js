const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactionauthorization', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_transactionauthorization",
        unique: true,
        fields: [
          { name: "transactionauthorizationid" },
        ]
      },
      {
        name: "transactionauthorization_pkey",
        unique: true,
        fields: [
          { name: "transactionauthorizationid" },
        ]
      },
    ]
  });
};
