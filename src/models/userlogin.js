const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlogin', {
    userloginid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'accessuser',
        key: 'accessuserid'
      }
    },
    passwordsalt: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    passwordhash: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    expiredon: {
      type: DataTypes.DATE,
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
    },
    ssouserid: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userlogin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userlogin_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_userlogin",
        unique: true,
        fields: [
          { name: "userloginid" },
        ]
      },
      {
        name: "userlogin_pkey",
        unique: true,
        fields: [
          { name: "userloginid" },
        ]
      },
    ]
  });
};
