const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogtag.init(sequelize, DataTypes);
}

class blogtag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    blogtagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(50),
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
    tableName: 'blogtag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_blogtag",
        unique: true,
        fields: [
          { name: "blogtagid" },
        ]
      },
    ]
  });
  }
}
