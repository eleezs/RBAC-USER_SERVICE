const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchpitchtag', {
    pitchpitchtagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchtagid: {
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
    tableName: 'pitchpitchtag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchpitchtag_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "idx_fk_pitchpitchtag_pitchtag",
        fields: [
          { name: "pitchtagid" },
        ]
      },
      {
        name: "pitchpitchtag_pkey",
        unique: true,
        fields: [
          { name: "pitchpitchtagid" },
        ]
      },
      {
        name: "pk_pitchpitchtag",
        unique: true,
        fields: [
          { name: "pitchpitchtagid" },
        ]
      },
    ]
  });
};
