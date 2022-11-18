const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogcommentreply.init(sequelize, DataTypes);
}

class blogcommentreply extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    blogcommentreplyid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blogcommentreply: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    blogcommentid: {
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
    tableName: 'blogcommentreply',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_blogcommentreply_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_blogcommentreply_blogcomment",
        fields: [
          { name: "blogcommentid" },
        ]
      },
      {
        name: "pk_blogcommentreply",
        unique: true,
        fields: [
          { name: "blogcommentreplyid" },
        ]
      },
    ]
  });
  }
}
