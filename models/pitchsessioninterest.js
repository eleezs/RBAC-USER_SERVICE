const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchsessioninterest', {
    pitchsessioninterestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
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
    tableName: 'pitchsessioninterest',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessioninterest_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_pitchsessioninterest_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pitchsessioninterest_pkey",
        unique: true,
        fields: [
          { name: "pitchsessioninterestid" },
        ]
      },
      {
        name: "pk_pitchsessioninterest",
        unique: true,
        fields: [
          { name: "pitchsessioninterestid" },
        ]
      },
    ]
  });
};
