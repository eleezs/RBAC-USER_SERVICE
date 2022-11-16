const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userfollower.init(sequelize, DataTypes);
}

class userfollower extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userfollowerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    followerid: {
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
    tableName: 'userfollower',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userfollower_accessuser_accessuserid",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_userfollower_accessuser_followerid",
        fields: [
          { name: "followerid" },
        ]
      },
      {
        name: "pk_userfollower",
        unique: true,
        fields: [
          { name: "userfollowerid" },
        ]
      },
    ]
  });
  }
}
