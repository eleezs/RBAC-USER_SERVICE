const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchbidresponse', {
    pitchbidresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    responsesequence: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pitchbidid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchbidresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pitchbidresponse: {
      type: DataTypes.STRING(1000),
      allowNull: true
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
    tableName: 'pitchbidresponse',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchbidresponse_pitchbid",
        fields: [
          { name: "pitchbidid" },
        ]
      },
      {
        name: "idx_fk_pitchbidresponse_pitchbidresponsetype",
        fields: [
          { name: "pitchbidresponsetypeid" },
        ]
      },
      {
        name: "idx_fk_pitchbidresponse_transactionevent",
        fields: [
          { name: "transactioneventid" },
        ]
      },
      {
        name: "pitchbidresponse_pkey",
        unique: true,
        fields: [
          { name: "pitchbidresponseid" },
        ]
      },
      {
        name: "pk_pitchbidresponse",
        unique: true,
        fields: [
          { name: "pitchbidresponseid" },
        ]
      },
    ]
  });
};
