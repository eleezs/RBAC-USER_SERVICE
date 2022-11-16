const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectbid.init(sequelize, DataTypes);
}

class projectbid extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectbidid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid_1: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
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
    tableName: 'projectbid',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectbid_accessuser",
        fields: [
          { name: "userid_1" },
        ]
      },
      {
        name: "idx_fk_projectbid_projectstake",
        fields: [
          { name: "projectstakeid" },
        ]
      },
      {
        name: "pk_projectbid",
        unique: true,
        fields: [
          { name: "projectbidid" },
        ]
      },
    ]
  });
  }
}
