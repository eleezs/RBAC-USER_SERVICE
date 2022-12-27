const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchdeck', {
    pitchdeckid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    saleschannelid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    investmentpaybackperiodid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    operatinglocationstateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    revenuelocationstateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    estimatedstartdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimatedbreakevendate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estimatedyearlyrevenue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    successprobability: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    spendcore: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    spendphysicalasset: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    spendmarketing: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    spendothers: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    availablemarketshare: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    targetmarketshare: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    websiteurl: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    revenuegrowthassumption: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    costinflationpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    yearlymargin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    unitprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    productcost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    netprofit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    yearsofexistence: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cummulativefiveyearprofitaftertax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    immediatespendrequirement: {
      type: DataTypes.DECIMAL,
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
    tableName: 'pitchdeck',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchdeck_countrystate_operatinglocationstateid",
        fields: [
          { name: "operatinglocationstateid" },
        ]
      },
      {
        name: "idx_fk_pitchdeck_countrystate_revenuelocationstateid",
        fields: [
          { name: "revenuelocationstateid" },
        ]
      },
      {
        name: "idx_fk_pitchdeck_investmentpaybackperiod",
        fields: [
          { name: "investmentpaybackperiodid" },
        ]
      },
      {
        name: "idx_fk_pitchdeck_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "idx_fk_pitchdeck_saleschannel",
        fields: [
          { name: "saleschannelid" },
        ]
      },
      {
        name: "pitchdeck_pkey",
        unique: true,
        fields: [
          { name: "pitchdeckid" },
        ]
      },
      {
        name: "pk_pitchdeck",
        unique: true,
        fields: [
          { name: "pitchdeckid" },
        ]
      },
    ]
  });
};
