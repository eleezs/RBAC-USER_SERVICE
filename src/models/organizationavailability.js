const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationavailability', {
    organizationavailabilityid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timefrom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timeto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'organizationavailability',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "organizationavailability_pkey",
        unique: true,
        fields: [
          { name: "organizationavailabilityid" },
        ]
      },
      {
        name: "pk_organizationavailability",
        unique: true,
        fields: [
          { name: "organizationavailabilityid" },
        ]
      },
    ]
  });
};
