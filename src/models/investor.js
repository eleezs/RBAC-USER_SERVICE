const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return investor.init(sequelize, DataTypes);
}

class investor extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    investorid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    investmentrangeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    investorparticipationlevelid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    bidanonymously: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    profilesummary: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    noparticipationthreshold: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'investor',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_investor_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_investor_investmentrange",
        fields: [
          { name: "investmentrangeid" },
        ]
      },
      {
        name: "idx_fk_investor_investorparticipationlevel",
        fields: [
          { name: "investorparticipationlevelid" },
        ]
      },
      {
        name: "pk_investor",
        unique: true,
        fields: [
          { name: "investorid" },
        ]
      },
      {
        name: "uk_investor_alias",
        unique: true,
        fields: [
          { name: "alias" },
        ]
      },
    ]
  });
  }
}
