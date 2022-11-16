const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reviewfeedback.init(sequelize, DataTypes);
}

class reviewfeedback extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reviewlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchreviewid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    islike: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isdislike: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isflag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reviewfeedbackcomment: {
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
    tableName: 'reviewfeedback',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewfeedback_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_reviewfeedback_pitchreview",
        fields: [
          { name: "pitchreviewid" },
        ]
      },
      {
        name: "pk_reviewfeedback",
        unique: true,
        fields: [
          { name: "reviewlikeid" },
        ]
      },
    ]
  });
  }
}
