const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messagerecipient', {
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
    schema: 'public',
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
        name: "messagerecipient_pkey",
        unique: true,
        fields: [
          { name: "messagerecipientid" },
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
};
