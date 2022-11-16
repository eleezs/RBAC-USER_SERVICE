const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchimage.init(sequelize, DataTypes);
}

class pitchimage extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchimageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    filepath: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fileextension: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    filecaption: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isdeleted: {
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
    tableName: 'pitchimage',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchimage_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitchimage",
        unique: true,
        fields: [
          { name: "pitchimageid" },
        ]
      },
    ]
  });
  }
}
