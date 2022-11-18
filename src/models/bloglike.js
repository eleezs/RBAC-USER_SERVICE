const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bloglike.init(sequelize, DataTypes);
}

class bloglike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bloglikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    blogpostid: {
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
    tableName: 'bloglike',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_bloglike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_bloglike_blogpost",
        fields: [
          { name: "blogpostid" },
        ]
      },
      {
        name: "pk_bloglike",
        unique: true,
        fields: [
          { name: "bloglikeid" },
        ]
      },
    ]
  });
  }
}
