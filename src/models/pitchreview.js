const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchreview.init(sequelize, DataTypes);
}

class pitchreview extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchreviewid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    businessstructureid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    businessphaseid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    hasintellectualpropertyregistered: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'pitchreview',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchreview_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "idx_fk_pitchreview_businessphase",
        fields: [
          { name: "businessphaseid" },
        ]
      },
      {
        name: "idx_fk_pitchreview_businessstructure",
        fields: [
          { name: "businessstructureid" },
        ]
      },
      {
        name: "idx_fk_pitchreview_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitchreview",
        unique: true,
        fields: [
          { name: "pitchreviewid" },
        ]
      },
    ]
  });
  }
}
