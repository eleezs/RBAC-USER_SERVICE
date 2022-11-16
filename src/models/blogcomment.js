const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogcomment.init(sequelize, DataTypes);
}

class blogcomment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
