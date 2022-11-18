const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchpitchtag.init(sequelize, DataTypes);
}

class pitchpitchtag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_pitchpitchtag",
        unique: true,
        fields: [
          { name: "pitchpitchtagid" },
        ]
      },
    ]
  });
  }
}
