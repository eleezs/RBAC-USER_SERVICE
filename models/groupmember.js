const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmember', {
    groupmemberid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'accessgroup',
        key: 'accessgroupid'
      }
    },
    accessgroupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'accessgroup',
        key: 'accessgroupid'
      }
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
    tableName: 'groupmember',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "groupmember_pkey",
        unique: true,
        fields: [
          { name: "groupmemberid" },
        ]
      },
      {
        name: "idx_fk_groupmember_accessgroup",
        fields: [
          { name: "accessgroupid" },
        ]
      },
      {
        name: "idx_fk_groupmember_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_groupmember",
        unique: true,
        fields: [
          { name: "groupmemberid" },
        ]
      },
    ]
  });
};
