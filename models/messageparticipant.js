const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messageparticipant', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_messageparticipant_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "messageparticipant_pkey",
        unique: true,
        fields: [
          { name: "messageparticipantid" },
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
};
