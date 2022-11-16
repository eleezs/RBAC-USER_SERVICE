const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messagerecipient.init(sequelize, DataTypes);
}

class messagerecipient extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messagerecipientid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    senton: {
      type: DataTypes.DATE,
      allowNull: false
    },
    readon: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedon: {
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
    tableName: 'messagerecipient',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_messagerecipient_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_messagerecipient_message",
        fields: [
          { name: "messageid" },
        ]
      },
      {
        name: "pk_messagerecipient",
        unique: true,
        fields: [
          { name: "messagerecipientid" },
        ]
      },
    ]
  });
  }
}
