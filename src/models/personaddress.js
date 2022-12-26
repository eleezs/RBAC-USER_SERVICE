const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personaddress', {
    personaddressid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'person',
        key: 'personid'
      }
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isprimary: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'personaddress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_personaddress_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_personaddress_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "personaddress_pkey",
        unique: true,
        fields: [
          { name: "personaddressid" },
        ]
      },
      {
        name: "pk_personaddress",
        unique: true,
        fields: [
          { name: "personaddressid" },
        ]
      },
    ]
  });
};
