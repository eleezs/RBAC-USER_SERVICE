const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    countrystateid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'countrystate',
        key: 'countrystateid'
      }
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
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
    tableName: 'city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "city_pkey",
        unique: true,
        fields: [
          { name: "cityid" },
        ]
      },
      {
        name: "idx_fk_city_countrystate",
        fields: [
          { name: "countrystateid" },
        ]
      },
      {
        name: "pk_city",
        unique: true,
        fields: [
          { name: "cityid" },
        ]
      },
    ]
  });
};
