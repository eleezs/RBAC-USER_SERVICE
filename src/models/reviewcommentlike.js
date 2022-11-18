const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reviewcommentlike.init(sequelize, DataTypes);
}

class reviewcommentlike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reviewcommentlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewcommentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
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
    tableName: 'reviewcommentlike',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewcommentlike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_reviewcommentlike_reviewcomment",
        fields: [
          { name: "reviewcommentid" },
        ]
      },
      {
        name: "pk_reviewcommentlike",
        unique: true,
        fields: [
          { name: "reviewcommentlikeid" },
        ]
      },
    ]
  });
  }
}
