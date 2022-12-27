const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    addressid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addresstypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'city',
        key: 'cityid'
      }
    },
    addressline1: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    addressline2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    streetnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    buildingnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
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
    tableName: 'address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "address_pkey",
        unique: true,
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_address_addresstype",
        fields: [
          { name: "addresstypeid" },
        ]
      },
      {
        name: "idx_fk_address_city",
        fields: [
          { name: "cityid" },
        ]
      },
      {
        name: "pk_address",
        unique: true,
        fields: [
          { name: "addressid" },
        ]
      },
    ]
  });
};
