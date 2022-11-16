const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchdeck.init(sequelize, DataTypes);
}

class pitchdeck extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
      type: DataTypes.DECIMAL(19,4),
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
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    productcost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    netprofit: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    yearsofexistence: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cummulativefiveyearprofitaftertax: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    immediatespendrequirement: {
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
    tableName: 'pitchdeck',
    schema: 'app',
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
        name: "pk_pitchdeck",
        unique: true,
        fields: [
          { name: "pitchdeckid" },
        ]
      },
    ]
  });
  }
}
