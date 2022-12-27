const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectinvestorreportlike', {
    projectinvestorreportlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    isdislike: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    projectinvestorreportid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
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
    tableName: 'projectinvestorreportlike',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectinvestorreportlike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectinvestorreportlike_projectinvestorreport",
        fields: [
          { name: "projectinvestorreportid" },
        ]
      },
      {
        name: "pk_projectinvestorreportlike",
        unique: true,
        fields: [
          { name: "projectinvestorreportlikeid" },
        ]
      },
      {
        name: "projectinvestorreportlike_pkey",
        unique: true,
        fields: [
          { name: "projectinvestorreportlikeid" },
        ]
      },
    ]
  });
};
