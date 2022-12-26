const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kyc', {
    kycid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
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
    tableName: 'kyc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kyc_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "kyc_pkey",
        unique: true,
        fields: [
          { name: "kycid" },
        ]
      },
      {
        name: "pk_kyc",
        unique: true,
        fields: [
          { name: "kycid" },
        ]
      },
    ]
  });
};
