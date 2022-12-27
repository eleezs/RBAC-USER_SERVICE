const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationserviceofferingtype', {
    organizationserviceofferingtypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offering: {
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
    tableName: 'organizationserviceofferingtype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "organizationserviceofferingtype_pkey",
        unique: true,
        fields: [
          { name: "organizationserviceofferingtypeid" },
        ]
      },
      {
        name: "pk_organizationserviceofferingtype",
        unique: true,
        fields: [
          { name: "organizationserviceofferingtypeid" },
        ]
      },
    ]
  });
};
