const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmotionresponse', {
    projectmotionresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectmotionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    projectstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isupvote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
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
    tableName: 'projectmotionresponse',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmotionresponse_projectmotion",
        fields: [
          { name: "projectmotionid" },
        ]
      },
      {
        name: "idx_fk_projectmotionresponse_projectstake",
        fields: [
          { name: "projectstakeid" },
        ]
      },
      {
        name: "pk_projectmotionresponse",
        unique: true,
        fields: [
          { name: "projectmotionresponseid" },
        ]
      },
      {
        name: "projectmotionresponse_pkey",
        unique: true,
        fields: [
          { name: "projectmotionresponseid" },
        ]
      },
    ]
  });
};
