const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationuser', {
    organizationuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    invitedby: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationuserroletypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    removedon: {
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
    tableName: 'organizationuser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationuser_accessuser_accessuserid",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_organizationuser_accessuser_invitedby",
        fields: [
          { name: "invitedby" },
        ]
      },
      {
        name: "idx_fk_organizationuser_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_organizationuser_organizationuserroletype",
        fields: [
          { name: "organizationuserroletypeid" },
        ]
      },
      {
        name: "organizationuser_pkey",
        unique: true,
        fields: [
          { name: "organizationuserid" },
        ]
      },
      {
        name: "pk_organizationuser",
        unique: true,
        fields: [
          { name: "organizationuserid" },
        ]
      },
    ]
  });
};
