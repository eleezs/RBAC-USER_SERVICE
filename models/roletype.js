const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roletype', {
    roleid: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    roletype: {
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
    tableName: 'roletype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_roletype",
        unique: true,
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "roletype_pkey",
        unique: true,
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "uk_roletype_roletype",
        unique: true,
        fields: [
          { name: "roletype" },
        ]
      },
    ]
  });
};
