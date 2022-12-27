const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usertype', {
    usertypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'usertype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_usertype",
        unique: true,
        fields: [
          { name: "usertypeid" },
        ]
      },
      {
        name: "uk_usertype_code",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "usertype_pkey",
        unique: true,
        fields: [
          { name: "usertypeid" },
        ]
      },
    ]
  });
};
