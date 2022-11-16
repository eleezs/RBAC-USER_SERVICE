const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogpost.init(sequelize, DataTypes);
}

class blogpost extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
