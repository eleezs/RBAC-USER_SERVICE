const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchsession', {
    pitchsessionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pitchtime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(5000),
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
    tableName: 'pitchsession',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsession_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pitchsession_pkey",
        unique: true,
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pk_pitchsession",
        unique: true,
        fields: [
          { name: "pitchsessionid" },
        ]
      },
    ]
  });
};
