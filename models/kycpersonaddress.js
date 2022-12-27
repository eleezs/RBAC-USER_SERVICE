const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycpersonaddress', {
    kycpersonaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kycpersonid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycaddressid: {
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
    tableName: 'kycpersonaddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fk_kycpersonaddress_kycaddress",
        fields: [
          { name: "kycaddressid" },
        ]
      },
      {
        name: "fk_kycpersonaddress_kycperson",
        fields: [
          { name: "kycpersonid" },
        ]
      },
      {
        name: "kycpersonaddress_pkey",
        unique: true,
        fields: [
          { name: "kycpersonaddressid" },
        ]
      },
      {
        name: "pk_kycpersonaddress",
        unique: true,
        fields: [
          { name: "kycpersonaddressid" },
        ]
      },
    ]
  });
};
