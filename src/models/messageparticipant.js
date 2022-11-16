const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messageparticipant.init(sequelize, DataTypes);
}

class messageparticipant extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messageparticipantid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    tableName: 'messageparticipant',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_messageparticipant_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_messageparticipant",
        unique: true,
        fields: [
          { name: "messageparticipantid" },
        ]
      },
    ]
  });
  }
}
