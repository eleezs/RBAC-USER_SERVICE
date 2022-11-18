const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return message.init(sequelize, DataTypes);
}

class message extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    parentmessageid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
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
    tableName: 'message',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_message_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_message_message",
        fields: [
          { name: "parentmessageid" },
        ]
      },
      {
        name: "pk_message",
        unique: true,
        fields: [
          { name: "messageid" },
        ]
      },
    ]
  });
  }
}
