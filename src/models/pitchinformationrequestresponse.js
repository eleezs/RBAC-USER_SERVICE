const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchinformationrequestresponse.init(sequelize, DataTypes);
}

class pitchinformationrequestresponse extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchinformationrequestresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchinformationrequestid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchinformationrequestresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    submittedon: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'pitchinformationrequestresponse',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchinformationrequestresponse_pitchinformationrequest",
        fields: [
          { name: "pitchinformationrequestid" },
        ]
      },
      {
        name: "idx_fk_pitchinformationrequestresponse_pitchinformationrequestr",
        fields: [
          { name: "pitchinformationrequestresponsetypeid" },
        ]
      },
      {
        name: "pk_pitchinformationrequestresponse",
        unique: true,
        fields: [
          { name: "pitchinformationrequestresponseid" },
        ]
      },
    ]
  });
  }
}
