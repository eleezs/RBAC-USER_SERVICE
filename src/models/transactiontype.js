const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactiontype', {
    transactiontypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    transactionfeeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    transactiontype: {
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
    tableName: 'transactiontype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_transactiontype_transactionfeeid",
        fields: [
          { name: "transactionfeeid" },
        ]
      },
      {
        name: "pk_transactiontype",
        unique: true,
        fields: [
          { name: "transactiontypeid" },
        ]
      },
      {
        name: "transactiontype_pkey",
        unique: true,
        fields: [
          { name: "transactiontypeid" },
        ]
      },
    ]
  });
};
