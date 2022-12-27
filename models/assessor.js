const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessor', {
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    profilesummary: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    highestlevelofeducation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    specialization: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    feecurrencyid: {
      type: DataTypes.SMALLINT,
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
    tableName: 'assessor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessor_pkey",
        unique: true,
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessor_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_assessor_currency",
        fields: [
          { name: "feecurrencyid" },
        ]
      },
      {
        name: "pk_assessor",
        unique: true,
        fields: [
          { name: "assessorid" },
        ]
      },
    ]
  });
};
