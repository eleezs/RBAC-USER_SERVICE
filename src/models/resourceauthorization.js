const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resourceauthorization', {
    resourceauthorizationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    authorizationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'authorizationtype',
        key: 'authorizationtypeid'
      }
    },
    resourceid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'resource',
        key: 'resourceid'
      }
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    authorizationexpires: {
      type: DataTypes.DATE,
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
    },
    accessgroupid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'resourceauthorization',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_resourceauthorization_authorizationtype",
        fields: [
          { name: "authorizationtypeid" },
        ]
      },
      {
        name: "idx_fk_resourceauthorization_resource",
        fields: [
          { name: "resourceid" },
        ]
      },
      {
        name: "pk_resourceauthorization",
        unique: true,
        fields: [
          { name: "resourceauthorizationid" },
        ]
      },
      {
        name: "resourceauthorization_pkey",
        unique: true,
        fields: [
          { name: "resourceauthorizationid" },
        ]
      },
    ]
  });
};
