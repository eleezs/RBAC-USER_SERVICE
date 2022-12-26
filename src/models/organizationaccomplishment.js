const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationaccomplishment', {
    organizationaccomplishmentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
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
    tableName: 'organizationaccomplishment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationaccomplishment_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "organizationaccomplishment_pkey",
        unique: true,
        fields: [
          { name: "organizationaccomplishmentid" },
        ]
      },
      {
        name: "pk_organizationaccomplishment",
        unique: true,
        fields: [
          { name: "organizationaccomplishmentid" },
        ]
      },
    ]
  });
};
