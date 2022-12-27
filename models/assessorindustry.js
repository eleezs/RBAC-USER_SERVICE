const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessorindustry', {
    assessorindustryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    industryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    yearsofexperience: {
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
    tableName: 'assessorindustry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessorindustry_pkey",
        unique: true,
        fields: [
          { name: "assessorindustryid" },
        ]
      },
      {
        name: "idx_fk_assessorindustry_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessorindustry_industry",
        fields: [
          { name: "industryid" },
        ]
      },
      {
        name: "pk_assessorindustry",
        unique: true,
        fields: [
          { name: "assessorindustryid" },
        ]
      },
    ]
  });
};
