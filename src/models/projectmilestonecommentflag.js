const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmilestonecommentflag', {
    projectmilestonecommentflagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectmilestonecommentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reporterid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flagdispositionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    projectmilestonecommentflag: {
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
    tableName: 'projectmilestonecommentflag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestonecommentflag_accessuser",
        fields: [
          { name: "reporterid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonecommentflag_flagdisposition",
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonecommentflag_projectmilestonecomment",
        fields: [
          { name: "projectmilestonecommentid" },
        ]
      },
      {
        name: "pk_projectmilestonecommentflag",
        unique: true,
        fields: [
          { name: "projectmilestonecommentflagid" },
        ]
      },
      {
        name: "projectmilestonecommentflag_pkey",
        unique: true,
        fields: [
          { name: "projectmilestonecommentflagid" },
        ]
      },
    ]
  });
};
