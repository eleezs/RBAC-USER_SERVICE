const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationaddress', {
    organizationaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isheadquarters: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'organizationaddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationaddress_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_organizationaddress_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "organizationaddress_pkey",
        unique: true,
        fields: [
          { name: "organizationaddressid" },
        ]
      },
      {
        name: "pk_organizationaddress",
        unique: true,
        fields: [
          { name: "organizationaddressid" },
        ]
      },
    ]
  });
};
