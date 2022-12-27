const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycaddress', {
    kycaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addresstypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressline1: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    addressline2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    streetnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    buildingnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
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
    tableName: 'kycaddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "kycaddress_pkey",
        unique: true,
        fields: [
          { name: "kycaddressid" },
        ]
      },
      {
        name: "pk_kycaddress",
        unique: true,
        fields: [
          { name: "kycaddressid" },
        ]
      },
    ]
  });
};
