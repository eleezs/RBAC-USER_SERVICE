const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificationrecipient', {
    notificationrecipientid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    notificationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    recipientid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    senton: {
      type: DataTypes.DATE,
      allowNull: true
    },
    readon: {
      type: DataTypes.DATE,
      allowNull: true
    },
    markunread: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    tableName: 'notificationrecipient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_notificationrecipient_accessuser",
        fields: [
          { name: "recipientid" },
        ]
      },
      {
        name: "idx_fk_notificationrecipient_notification",
        fields: [
          { name: "notificationid" },
        ]
      },
      {
        name: "notificationrecipient_pkey",
        unique: true,
        fields: [
          { name: "notificationrecipientid" },
        ]
      },
      {
        name: "pk_notificationrecipient",
        unique: true,
        fields: [
          { name: "notificationrecipientid" },
        ]
      },
    ]
  });
};
