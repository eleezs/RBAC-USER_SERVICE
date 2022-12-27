const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
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
    tableName: 'item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_item_currency",
        fields: [
          { name: "currencyid" },
        ]
      },
      {
        name: "idx_fk_item_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "idx_fk_item_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "item_pkey",
        unique: true,
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "pk_item",
        unique: true,
        fields: [
          { name: "itemid" },
        ]
      },
    ]
  });
};
