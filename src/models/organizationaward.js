const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationaward', {
    organizationawardid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationaward: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(50),
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
    tableName: 'organizationaward',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationaward_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "organizationaward_pkey",
        unique: true,
        fields: [
          { name: "organizationawardid" },
        ]
      },
      {
        name: "pk_organizationaward",
        unique: true,
        fields: [
          { name: "organizationawardid" },
        ]
      },
    ]
  });
};
