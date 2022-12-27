const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogcommentlike', {
    blogcommentlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    blogcommentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isdislike: {
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
    tableName: 'blogcommentlike',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "blogcommentlike_pkey",
        unique: true,
        fields: [
          { name: "blogcommentlikeid" },
        ]
      },
      {
        name: "idx_fk_blogcommentlike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_blogcommentlike_blogcomment",
        fields: [
          { name: "blogcommentid" },
        ]
      },
      {
        name: "pk_blogcommentlike",
        unique: true,
        fields: [
          { name: "blogcommentlikeid" },
        ]
      },
    ]
  });
};
