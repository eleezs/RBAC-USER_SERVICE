const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countrystate', {
    countrystateid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    parentcountrystateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'country',
        key: 'countryid'
      }
    },
    countrystate: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    countrystatetype: {
      type: DataTypes.STRING(40),
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
    tableName: 'countrystate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "countrystate_pkey",
        unique: true,
        fields: [
          { name: "countrystateid" },
        ]
      },
      {
        name: "idx_fk_countrystate_country",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "idx_fk_countrystate_countrystate",
        fields: [
          { name: "parentcountrystateid" },
        ]
      },
      {
        name: "pk_countrystate",
        unique: true,
        fields: [
          { name: "countrystateid" },
        ]
      },
    ]
  });
};
