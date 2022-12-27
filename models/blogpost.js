const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogpost', {
    blogpostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    postcontent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ispublished: {
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
    tableName: 'blogpost',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "blogpost_pkey",
        unique: true,
        fields: [
          { name: "blogpostid" },
        ]
      },
      {
        name: "idx_fk_blogpost_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_blogpost",
        unique: true,
        fields: [
          { name: "blogpostid" },
        ]
      },
    ]
  });
};
