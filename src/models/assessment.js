const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessment.init(sequelize, DataTypes);
}

class assessment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmenttypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    requestorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    assessmentstatusid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    requestorrate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    negotiatedrate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    rateconfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    summary: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    isrequestedbypitcher: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isrequestedbyself: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    transactioneventid: {
      type: DataTypes.BIGINT,
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
    tableName: 'assessment',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessment_accessuser",
        fields: [
          { name: "requestorid" },
        ]
      },
      {
        name: "idx_fk_assessment_assessmentstatus",
        fields: [
          { name: "assessmentstatusid" },
        ]
      },
      {
        name: "idx_fk_assessment_assessmenttype",
        fields: [
          { name: "assessmenttypeid" },
        ]
      },
      {
        name: "idx_fk_assessment_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessment_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_assessment_transactionevent",
        fields: [
          { name: "transactioneventid" },
        ]
      },
      {
        name: "pk_assessment",
        unique: true,
        fields: [
          { name: "assessmentid" },
        ]
      },
    ]
  });
  }
}
