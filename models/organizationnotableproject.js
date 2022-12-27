const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationnotableproject', {
    organizationnotableprojectd: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organizationid: {
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
    tableName: 'organizationnotableproject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationnotableproject_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "organizationnotableproject_pkey",
        unique: true,
        fields: [
          { name: "organizationnotableprojectd" },
        ]
      },
      {
        name: "pk_organizationnotableproject",
        unique: true,
        fields: [
          { name: "organizationnotableprojectd" },
        ]
      },
    ]
  });
};
