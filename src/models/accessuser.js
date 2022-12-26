const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessuser', {
    accessuserid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'person',
        key: 'personid'
      }
    },
    usertypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    username: {
      type: DataTypes.STRING(50),
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
    tableName: 'accessuser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "accessuser_pkey",
        unique: true,
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_accessuser_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "idx_fk_accessuser_usertype",
        fields: [
          { name: "usertypeid" },
        ]
      },
      {
        name: "pk_accessuser",
        unique: true,
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "uk_accessuser_username",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
