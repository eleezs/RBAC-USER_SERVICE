const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogcomment', {
    blogcommentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blogcomment: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    blogpostid: {
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
    tableName: 'blogcomment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "blogcomment_pkey",
        unique: true,
        fields: [
          { name: "blogcommentid" },
        ]
      },
      {
        name: "idx_fk_blogcomment_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_blogcomment_blogpost",
        fields: [
          { name: "blogpostid" },
        ]
      },
      {
        name: "pk_blogcomment",
        unique: true,
        fields: [
          { name: "blogcommentid" },
        ]
      },
    ]
  });
};
