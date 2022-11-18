const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchview.init(sequelize, DataTypes);
}

class pitchview extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchviewid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
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
    tableName: 'pitchview',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchview_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_pitchview_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitchview",
        unique: true,
        fields: [
          { name: "pitchviewid" },
        ]
      },
    ]
  });
  }
}
