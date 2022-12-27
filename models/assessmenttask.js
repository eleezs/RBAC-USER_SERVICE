const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessmenttask', {
    assessmenttaskid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tasktitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tasktext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    responsetitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    responsetext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assessmenttaskcomment: {
      type: DataTypes.STRING(500),
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
    tableName: 'assessmenttask',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessmenttask_pkey",
        unique: true,
        fields: [
          { name: "assessmenttaskid" },
        ]
      },
      {
        name: "idx_fk_assessmenttask_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "pk_assessmenttask",
        unique: true,
        fields: [
          { name: "assessmenttaskid" },
        ]
      },
    ]
  });
};
