const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmilestonecomment', {
    projectmilestonecommentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectmilestonecomment: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    projectmilestoneid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    parentprojectmilestonecommentid: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'projectmilestonecomment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestonecomment_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonecomment_projectmilestone",
        fields: [
          { name: "projectmilestoneid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonecomment_projectmilestonecomment",
        fields: [
          { name: "parentprojectmilestonecommentid" },
        ]
      },
      {
        name: "pk_projectmilestonecomment",
        unique: true,
        fields: [
          { name: "projectmilestonecommentid" },
        ]
      },
      {
        name: "projectmilestonecomment_pkey",
        unique: true,
        fields: [
          { name: "projectmilestonecommentid" },
        ]
      },
    ]
  });
};
