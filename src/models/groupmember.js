const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return groupmember.init(sequelize, DataTypes);
}

class groupmember extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    groupmemberid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessgroupid: {
      type: DataTypes.INTEGER,
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
    tableName: 'groupmember',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_groupmember_accessgroup",
        fields: [
          { name: "accessgroupid" },
        ]
      },
      {
        name: "idx_fk_groupmember_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_groupmember",
        unique: true,
        fields: [
          { name: "groupmemberid" },
        ]
      },
    ]
  });
  }
}
