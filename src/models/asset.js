const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asset', {
    assetid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assetcode: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    listedon: {
      type: DataTypes.DATE,
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
    tableName: 'asset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asset_pkey",
        unique: true,
        fields: [
          { name: "assetid" },
        ]
      },
      {
        name: "idx_fk_asset_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "pk_asset",
        unique: true,
        fields: [
          { name: "assetid" },
        ]
      },
    ]
  });
};
