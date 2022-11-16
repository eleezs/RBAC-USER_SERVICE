const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchdeckcashflow.init(sequelize, DataTypes);
}

class pitchdeckcashflow extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchdeckcashflowid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchdeckid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dateyear: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    datemonth: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    revenue: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    expense: {
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
    tableName: 'pitchdeckcashflow',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchdeckcashflow_pitchdeck",
        fields: [
          { name: "pitchdeckid" },
        ]
      },
      {
        name: "pitchdeckcashflow_dateyear_datemonth_unique",
        unique: true,
        fields: [
          { name: "dateyear" },
          { name: "datemonth" },
          { name: "pitchdeckid" },
        ]
      },
      {
        name: "pitchdeckcashflow_pitchdeckid_dateyear_unique",
        unique: true,
        fields: [
          { name: "dateyear" },
          { name: "pitchdeckid" },
        ]
      },
      {
        name: "pk_pitchdeckcashflowid",
        unique: true,
        fields: [
          { name: "pitchdeckcashflowid" },
        ]
      },
    ]
  });
  }
}
