const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchsessioninterest.init(sequelize, DataTypes);
}

class pitchsessioninterest extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_pitchsessioninterest",
        unique: true,
        fields: [
          { name: "pitchsessioninterestid" },
        ]
      },
    ]
  });
  }
}
