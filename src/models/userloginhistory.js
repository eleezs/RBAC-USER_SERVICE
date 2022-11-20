const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userloginhistory.init(sequelize, DataTypes);
}

class userloginhistory extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userloginhistoryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: false
    },
    userloginid: {
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
    tableName: 'userloginhistory',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userloginhistory_userlogin",
        fields: [
          { name: "userloginid" },
        ]
      },
      {
        name: "pk_userloginhistory",
        unique: true,
        fields: [
          { name: "userloginhistoryid" },
        ]
      },
    ]
  });
  }
}
