const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmilestonelike', {
    projectmilestonelikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectmilestoneid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isdislike: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'projectmilestonelike',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestonelike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonelike_projectmilestone",
        fields: [
          { name: "projectmilestoneid" },
        ]
      },
      {
        name: "pk_projectmilestonelike",
        unique: true,
        fields: [
          { name: "projectmilestonelikeid" },
        ]
      },
      {
        name: "projectmilestonelike_pkey",
        unique: true,
        fields: [
          { name: "projectmilestonelikeid" },
        ]
      },
    ]
  });
};
