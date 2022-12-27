const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizationauthorization', {
    organizationauthorizationid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    organizationuserroletypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationauthorization: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'organizationauthorization',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationauthorization_organizationuserroletype",
        fields: [
          { name: "organizationuserroletypeid" },
        ]
      },
      {
        name: "organizationauthorization_pkey",
        unique: true,
        fields: [
          { name: "organizationauthorizationid" },
        ]
      },
      {
        name: "pk_organizationauthorization",
        unique: true,
        fields: [
          { name: "organizationauthorizationid" },
        ]
      },
    ]
  });
};
