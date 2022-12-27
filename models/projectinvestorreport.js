const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectinvestorreport', {
    projectinvestorreportid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descritpion: {
      type: DataTypes.STRING(5000),
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
    tableName: 'projectinvestorreport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectinvestorreport_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectinvestorreport",
        unique: true,
        fields: [
          { name: "projectinvestorreportid" },
        ]
      },
      {
        name: "projectinvestorreport_pkey",
        unique: true,
        fields: [
          { name: "projectinvestorreportid" },
        ]
      },
    ]
  });
};
