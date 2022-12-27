const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycreview', {
    kycreviewid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    employeeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycapprovereasonid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    kycrejectionreasonid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(5000),
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
    tableName: 'kycreview',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kycreview_employee",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "idx_fk_kycreview_kyc",
        fields: [
          { name: "kycid" },
        ]
      },
      {
        name: "idx_fk_kycreview_kycapprovereason",
        fields: [
          { name: "kycapprovereasonid" },
        ]
      },
      {
        name: "idx_fk_kycreview_kycrejectionreason",
        fields: [
          { name: "kycrejectionreasonid" },
        ]
      },
      {
        name: "kycreview_pkey",
        unique: true,
        fields: [
          { name: "kycreviewid" },
        ]
      },
      {
        name: "pk_kycreview",
        unique: true,
        fields: [
          { name: "kycreviewid" },
        ]
      },
    ]
  });
};
