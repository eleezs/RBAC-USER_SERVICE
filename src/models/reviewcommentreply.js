const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reviewcommentreply.init(sequelize, DataTypes);
}

class reviewcommentreply extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reviewcommentreplyid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewcommentreplycomment: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    reviewcommentid: {
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
    tableName: 'reviewcommentreply',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewcommentreply_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_reviewcommentreply_reviewcomment",
        fields: [
          { name: "reviewcommentid" },
        ]
      },
      {
        name: "pk_reviewcommentreply",
        unique: true,
        fields: [
          { name: "reviewcommentreplyid" },
        ]
      },
    ]
  });
  }
}
