const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogpostimage.init(sequelize, DataTypes);
}

class blogpostimage extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    blogpostimageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blogpostid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    filepath: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fileextension: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    filecaption: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'blogpostimage',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_blogpostimage_blogpost",
        fields: [
          { name: "blogpostid" },
        ]
      },
      {
        name: "pk_blogpostimage",
        unique: true,
        fields: [
          { name: "blogpostimageid" },
        ]
      },
    ]
  });
  }
}
