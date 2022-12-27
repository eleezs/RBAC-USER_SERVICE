const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmilestonecommentlike', {
    projectmilestonecommentlike: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectmilestonecommentid: {
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
    tableName: 'projectmilestonecommentlike',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestonecommentlike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectmilestonecommentlike_projectmilestonecomment",
        fields: [
          { name: "projectmilestonecommentid" },
        ]
      },
      {
        name: "pk_projectmilestonecommentlike",
        unique: true,
        fields: [
          { name: "projectmilestonecommentlike" },
        ]
      },
      {
        name: "projectmilestonecommentlike_pkey",
        unique: true,
        fields: [
          { name: "projectmilestonecommentlike" },
        ]
      },
    ]
  });
};
