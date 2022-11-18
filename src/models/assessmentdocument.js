const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessmentdocument.init(sequelize, DataTypes);
}

class assessmentdocument extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessmentdocumentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmenttaskid: {
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
    tableName: 'assessmentdocument',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessmentdocument_assessmenttask",
        fields: [
          { name: "assessmenttaskid" },
        ]
      },
      {
        name: "pk_assessmentdocument",
        unique: true,
        fields: [
          { name: "assessmentdocumentid" },
        ]
      },
    ]
  });
  }
}
