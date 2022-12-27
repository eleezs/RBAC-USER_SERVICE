const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchsessionresponse', {
    pitchsessionresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    responsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pitchsessionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchtime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pitchsessionresponse: {
      type: DataTypes.STRING(500),
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
    tableName: 'pitchsessionresponse',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessionresponse_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "idx_fk_pitchsessionresponse_responsetype",
        fields: [
          { name: "responsetypeid" },
        ]
      },
      {
        name: "pitchsessionresponse_pkey",
        unique: true,
        fields: [
          { name: "pitchsessionresponseid" },
        ]
      },
      {
        name: "pk_pitchsessionresponse",
        unique: true,
        fields: [
          { name: "pitchsessionresponseid" },
        ]
      },
    ]
  });
};
