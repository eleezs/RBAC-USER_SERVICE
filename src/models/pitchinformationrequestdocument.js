const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchinformationrequestdocument.init(sequelize, DataTypes);
}

class pitchinformationrequestdocument extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchinformationrequestdocumentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchinformationrequestresponseid: {
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
    tableName: 'pitchinformationrequestdocument',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchinformationrequestdocument_pitchinformationrequestr",
        fields: [
          { name: "pitchinformationrequestresponseid" },
        ]
      },
      {
        name: "pk_pitchinformationrequestdocument",
        unique: true,
        fields: [
          { name: "pitchinformationrequestdocumentid" },
        ]
      },
    ]
  });
  }
}
