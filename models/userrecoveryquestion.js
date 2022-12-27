const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userrecoveryquestion', {
    userrecoveryquestionid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    recoveryquestionid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING(500),
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
    tableName: 'userrecoveryquestion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userrecoveryquestion_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_userrecoveryquestion_recoveryquestion",
        fields: [
          { name: "recoveryquestionid" },
        ]
      },
      {
        name: "pk_userrecoveryquestion",
        unique: true,
        fields: [
          { name: "userrecoveryquestionid" },
        ]
      },
      {
        name: "userrecoveryquestion_pkey",
        unique: true,
        fields: [
          { name: "userrecoveryquestionid" },
        ]
      },
    ]
  });
};
