const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycidentifier', {
    kycidentifierid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kycpersonid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycidentifiertypeid: {
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
    tableName: 'kycidentifier',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kycidentifier_kycidentifiertype",
        fields: [
          { name: "kycidentifiertypeid" },
        ]
      },
      {
        name: "idx_fk_kycidentifier_kycperson",
        fields: [
          { name: "kycpersonid" },
        ]
      },
      {
        name: "kycidentifier_pkey",
        unique: true,
        fields: [
          { name: "kycidentifierid" },
        ]
      },
      {
        name: "pk_kycidentifier",
        unique: true,
        fields: [
          { name: "kycidentifierid" },
        ]
      },
    ]
  });
};
