const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return usertype.init(sequelize, DataTypes);
}

class usertype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    usertypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'usertype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_usertype",
        unique: true,
        fields: [
          { name: "usertypeid" },
        ]
      },
      {
        name: "uk_usertype_code",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
