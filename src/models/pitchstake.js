const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchstake.init(sequelize, DataTypes);
}

class pitchstake extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
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
    purchasedatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isfounderstake: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'pitchstake',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchstake_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_pitchstake_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitchstake",
        unique: true,
        fields: [
          { name: "pitchstakeid" },
        ]
      },
    ]
  });
  }
}
