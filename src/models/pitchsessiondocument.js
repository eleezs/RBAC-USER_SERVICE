const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchsessiondocument.init(sequelize, DataTypes);
}

class pitchsessiondocument extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchsessiondocumentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionid: {
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
      allowNull: true
    },
    filecaption: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isrecording: {
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
    tableName: 'pitchsessiondocument',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessiondocument_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pk_pitchsessiondocument",
        unique: true,
        fields: [
          { name: "pitchsessiondocumentid" },
        ]
      },
    ]
  });
  }
}
