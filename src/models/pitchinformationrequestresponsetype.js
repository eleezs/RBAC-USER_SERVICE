const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchinformationrequestresponsetype', {
    pitchinformationrequestresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    pitchinformationrequestresponsetype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'pitchinformationrequestresponsetype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pitchinformationrequestresponsetype_pkey",
        unique: true,
        fields: [
          { name: "pitchinformationrequestresponsetypeid" },
        ]
      },
      {
        name: "pk_pitchinformationrequestresponsetype",
        unique: true,
        fields: [
          { name: "pitchinformationrequestresponsetypeid" },
        ]
      },
    ]
  });
};
