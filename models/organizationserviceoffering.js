const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationserviceoffering', {
    organizationserviceofferingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationserviceofferingtypeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rate: {
      type: DataTypes.DECIMAL,
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
    tableName: 'organizationserviceoffering',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationserviceoffering_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_organizationserviceoffering_organizationserviceofferingt",
        fields: [
          { name: "organizationserviceofferingtypeid" },
        ]
      },
      {
        name: "organizationserviceoffering_pkey",
        unique: true,
        fields: [
          { name: "organizationserviceofferingid" },
        ]
      },
      {
        name: "pk_organizationserviceoffering",
        unique: true,
        fields: [
          { name: "organizationserviceofferingid" },
        ]
      },
    ]
  });
};
