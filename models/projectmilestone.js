const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmilestone', {
    projectmilestoneid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    datecompleted: {
      type: DataTypes.DATEONLY,
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
    tableName: 'projectmilestone',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestone_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectmilestone",
        unique: true,
        fields: [
          { name: "projectmilestoneid" },
        ]
      },
      {
        name: "projectmilestone_pkey",
        unique: true,
        fields: [
          { name: "projectmilestoneid" },
        ]
      },
    ]
  });
};
