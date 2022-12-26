const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationinvestmentparticipationlevel', {
    organizationinvestmentparticipationlevelid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    organizationinvestmentparticipationlevel: {
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
    tableName: 'organizationinvestmentparticipationlevel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "organizationinvestmentparticipationlevel_pkey",
        unique: true,
        fields: [
          { name: "organizationinvestmentparticipationlevelid" },
        ]
      },
      {
        name: "pk_organizationinvestmentparticipationlevel",
        unique: true,
        fields: [
          { name: "organizationinvestmentparticipationlevelid" },
        ]
      },
    ]
  });
};
