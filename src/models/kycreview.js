const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycreview.init(sequelize, DataTypes);
}

class kycreview extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_kycreview",
        unique: true,
        fields: [
          { name: "kycreviewid" },
        ]
      },
    ]
  });
  }
}
