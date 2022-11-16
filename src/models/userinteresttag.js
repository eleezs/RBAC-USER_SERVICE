const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userinteresttag.init(sequelize, DataTypes);
}

class userinteresttag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userinteresttagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    interesttagid: {
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
    tableName: 'userinteresttag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "fk_userinteresttag_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "fk_userinteresttag_interesttag",
        fields: [
          { name: "interesttagid" },
        ]
      },
      {
        name: "pk_userinteresttag",
        unique: true,
        fields: [
          { name: "userinteresttagid" },
        ]
      },
    ]
  });
  }
}
