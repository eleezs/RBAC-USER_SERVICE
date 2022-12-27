const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectbid', {
    projectbidid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid_1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
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
    tableName: 'projectbid',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectbid_accessuser",
        fields: [
          { name: "userid_1" },
        ]
      },
      {
        name: "idx_fk_projectbid_projectstake",
        fields: [
          { name: "projectstakeid" },
        ]
      },
      {
        name: "pk_projectbid",
        unique: true,
        fields: [
          { name: "projectbidid" },
        ]
      },
      {
        name: "projectbid_pkey",
        unique: true,
        fields: [
          { name: "projectbidid" },
        ]
      },
    ]
  });
};
