const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phonecode', {
    phonecodeid: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'country',
        key: 'countryid'
      }
    },
    countrycode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    areacode: {
      type: DataTypes.CHAR(4),
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
    tableName: 'phonecode',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_phonecode_country",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "phonecode_pkey",
        unique: true,
        fields: [
          { name: "phonecodeid" },
        ]
      },
      {
        name: "pk_phonecode",
        unique: true,
        fields: [
          { name: "phonecodeid" },
        ]
      },
      {
        name: "uk_phonecode_countrycode_areacode",
        unique: true,
        fields: [
          { name: "countrycode" },
          { name: "areacode" },
        ]
      },
    ]
  });
};
