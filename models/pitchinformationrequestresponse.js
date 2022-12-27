const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchinformationrequestresponse', {
    pitchinformationrequestresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchinformationrequestid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchinformationrequestresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    submittedon: {
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
    }
  }, {
    sequelize,
    tableName: 'pitchinformationrequestresponse',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchinformationrequestresponse_pitchinformationrequest",
        fields: [
          { name: "pitchinformationrequestid" },
        ]
      },
      {
        name: "idx_fk_pitchinformationrequestresponse_pitchinformationrequestr",
        fields: [
          { name: "pitchinformationrequestresponsetypeid" },
        ]
      },
      {
        name: "pitchinformationrequestresponse_pkey",
        unique: true,
        fields: [
          { name: "pitchinformationrequestresponseid" },
        ]
      },
      {
        name: "pk_pitchinformationrequestresponse",
        unique: true,
        fields: [
          { name: "pitchinformationrequestresponseid" },
        ]
      },
    ]
  });
};
