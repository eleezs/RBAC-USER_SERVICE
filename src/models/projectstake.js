const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectstake.init(sequelize, DataTypes);
}

class projectstake extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchstakeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    purchaseprice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    purchasedate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    soldprice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    solddate: {
      type: DataTypes.DECIMAL(19,4),
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
    tableName: 'projectstake',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectstake_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectstake_pitchstake",
        fields: [
          { name: "pitchstakeid" },
        ]
      },
      {
        name: "idx_fk_projectstake_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectstake",
        unique: true,
        fields: [
          { name: "projectstakeid" },
        ]
      },
    ]
  });
  }
}
