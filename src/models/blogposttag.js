const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogposttag', {
    blogposttagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blogpostid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    blogtagid: {
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
    tableName: 'blogposttag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "blogposttag_pkey",
        unique: true,
        fields: [
          { name: "blogposttagid" },
        ]
      },
      {
        name: "idx_fk_blogposttag_blogpost",
        fields: [
          { name: "blogpostid" },
        ]
      },
      {
        name: "idx_fk_blogposttag_blogtag",
        fields: [
          { name: "blogtagid" },
        ]
      },
      {
        name: "pk_blogposttag",
        unique: true,
        fields: [
          { name: "blogposttagid" },
        ]
      },
    ]
  });
};
