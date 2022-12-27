const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactionstatustype', {
    transactionstatustypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    transactionstatustype: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'transactionstatustype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_transactionstatustype",
        unique: true,
        fields: [
          { name: "transactionstatustypeid" },
        ]
      },
      {
        name: "transactionstatustype_pkey",
        unique: true,
        fields: [
          { name: "transactionstatustypeid" },
        ]
      },
    ]
  });
};
