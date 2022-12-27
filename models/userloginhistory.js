const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userloginhistory', {
    userloginhistoryid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: false
    },
    userloginid: {
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
    tableName: 'userloginhistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userloginhistory_userlogin",
        fields: [
          { name: "userloginid" },
        ]
      },
      {
        name: "pk_userloginhistory",
        unique: true,
        fields: [
          { name: "userloginhistoryid" },
        ]
      },
      {
        name: "userloginhistory_pkey",
        unique: true,
        fields: [
          { name: "userloginhistoryid" },
        ]
      },
    ]
  });
};
