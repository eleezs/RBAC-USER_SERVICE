const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchinformationrequest.init(sequelize, DataTypes);
}

class pitchinformationrequest extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchinformationrequestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    requestorid: {
      type: DataTypes.BIGINT,
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
    duedate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    viewedon: {
      type: DataTypes.DATE,
      allowNull: true
    },
    firstdrafton: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'pitchinformationrequest',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchinformationrequest_accessuser",
        fields: [
          { name: "requestorid" },
        ]
      },
      {
        name: "idx_fk_pitchinformationrequest_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitchinformationrequest",
        unique: true,
        fields: [
          { name: "pitchinformationrequestid" },
        ]
      },
    ]
  });
  }
}
