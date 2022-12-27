const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitch', {
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitcherid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    businessstructureid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pitchstatusid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    industryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    intellectualtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fundinggoal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stakeoffered: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pitchervaluation: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pitchsummary: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    pitchdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ideaowner: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    profitdistributionpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    profitdistributionfrequency: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    profitdistributionstartyear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    auditfundedbyinvestors: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    investorreportpublishfrequency: {
      type: DataTypes.STRING(15),
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
    tableName: 'pitch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitch_businessstructure",
        fields: [
          { name: "businessstructureid" },
        ]
      },
      {
        name: "idx_fk_pitch_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_pitch_industry",
        fields: [
          { name: "industryid" },
        ]
      },
      {
        name: "idx_fk_pitch_intellectualtype",
        fields: [
          { name: "intellectualtypeid" },
        ]
      },
      {
        name: "idx_fk_pitch_pitcher",
        fields: [
          { name: "pitcherid" },
        ]
      },
      {
        name: "idx_fk_pitch_pitchstatus",
        fields: [
          { name: "pitchstatusid" },
        ]
      },
      {
        name: "pitch_pkey",
        unique: true,
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_pitch",
        unique: true,
        fields: [
          { name: "pitchid" },
        ]
      },
    ]
  });
};
