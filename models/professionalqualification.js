const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professionalqualification', {
    professionalqualificationid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    industryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    professionalqualification: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    awardingbody: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    renewalfrequency: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    haslicensenumber: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isretired: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'professionalqualification',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_professionalqualification_industryid",
        fields: [
          { name: "industryid" },
        ]
      },
      {
        name: "pk_professionalqualification",
        unique: true,
        fields: [
          { name: "professionalqualificationid" },
        ]
      },
      {
        name: "professionalqualification_pkey",
        unique: true,
        fields: [
          { name: "professionalqualificationid" },
        ]
      },
    ]
  });
};
