const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return notification.init(sequelize, DataTypes);
}

class notification extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    notificationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    notificationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    body: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
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
    tableName: 'notification',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_notification_notificationtype",
        fields: [
          { name: "notificationtypeid" },
        ]
      },
      {
        name: "pk_notification",
        unique: true,
        fields: [
          { name: "notificationid" },
        ]
      },
    ]
  });
  }
}
