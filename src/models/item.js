const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return item.init(sequelize, DataTypes);
}

class item extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_item",
        unique: true,
        fields: [
          { name: "itemid" },
        ]
      },
    ]
  });
  }
}
