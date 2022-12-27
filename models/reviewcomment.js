const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviewcomment', {
    reviewcommentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewcomment: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    pitchreviewid: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    tableName: 'reviewcomment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewcomment_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_reviewcomment_pitchreview",
        fields: [
          { name: "pitchreviewid" },
        ]
      },
      {
        name: "pk_reviewcomment",
        unique: true,
        fields: [
          { name: "reviewcommentid" },
        ]
      },
      {
        name: "reviewcomment_pkey",
        unique: true,
        fields: [
          { name: "reviewcommentid" },
        ]
      },
    ]
  });
};
