const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchbid.init(sequelize, DataTypes);
}

class pitchbid extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchbidid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchstakeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
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
    tableName: 'pitchbid',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchbid_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_pitchbid_pitchstake",
        fields: [
          { name: "pitchstakeid" },
        ]
      },
      {
        name: "pk_pitchbid",
        unique: true,
        fields: [
          { name: "pitchbidid" },
        ]
      },
    ]
  });
  }
}
