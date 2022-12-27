const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardissuer', {
    cardissuerid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    issuername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    issuercode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
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
    tableName: 'cardissuer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cardissuer_pkey",
        unique: true,
        fields: [
          { name: "cardissuerid" },
        ]
      },
      {
        name: "idx_fk_cardissuer_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "pk_cardissuer",
        unique: true,
        fields: [
          { name: "cardissuerid" },
        ]
      },
    ]
  });
};
