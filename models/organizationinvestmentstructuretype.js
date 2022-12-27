const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationinvestmentstructuretype', {
    organizationinvestmentstructuretypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationinvestmentstructuretype: {
      type: DataTypes.STRING(100),
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
    tableName: 'organizationinvestmentstructuretype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "organizationinvestmentstructuretype_pkey",
        unique: true,
        fields: [
          { name: "organizationinvestmentstructuretypeid" },
        ]
      },
      {
        name: "pk_organizationinvestmentstructuretype",
        unique: true,
        fields: [
          { name: "organizationinvestmentstructuretypeid" },
        ]
      },
    ]
  });
};
