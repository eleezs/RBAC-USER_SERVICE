const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificationtype', {
    notificationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    notificationtype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isurgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sendemail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    sendphone: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    tableName: 'notificationtype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "notificationtype_pkey",
        unique: true,
        fields: [
          { name: "notificationtypeid" },
        ]
      },
      {
        name: "pk_notificationtype",
        unique: true,
        fields: [
          { name: "notificationtypeid" },
        ]
      },
    ]
  });
};
