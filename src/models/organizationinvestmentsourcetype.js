const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationinvestmentsourcetype', {
    organizationinvestmentsourcetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationinvestmentsourcetype: {
      type: DataTypes.STRING(50),
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
    tableName: 'organizationinvestmentsourcetype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "organizationinvestmentsourcetype_pkey",
        unique: true,
        fields: [
          { name: "organizationinvestmentsourcetypeid" },
        ]
      },
      {
        name: "pk_organizationinvestmentsourcetype",
        unique: true,
        fields: [
          { name: "organizationinvestmentsourcetypeid" },
        ]
      },
    ]
  });
};
