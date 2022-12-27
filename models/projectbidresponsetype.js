const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectbidresponsetype', {
    projectbidresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    projectbidresponsetype: {
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
    tableName: 'projectbidresponsetype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_projectbidresponsetype",
        unique: true,
        fields: [
          { name: "projectbidresponsetypeid" },
        ]
      },
      {
        name: "projectbidresponsetype_pkey",
        unique: true,
        fields: [
          { name: "projectbidresponsetypeid" },
        ]
      },
    ]
  });
};
