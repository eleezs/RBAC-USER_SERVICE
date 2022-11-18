const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchsessionlocation.init(sequelize, DataTypes);
}

class pitchsessionlocation extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchsessionlocationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionid: {
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
    tableName: 'pitchsessionlocation',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessionlocation_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pk_pitchsessionlocation",
        unique: true,
        fields: [
          { name: "pitchsessionlocationid" },
        ]
      },
    ]
  });
  }
}
