const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return watchlist.init(sequelize, DataTypes);
}

class watchlist extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    watchlistid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemid: {
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
    tableName: 'watchlist',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_watchlist_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_watchlist_item",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "pk_watchlist",
        unique: true,
        fields: [
          { name: "watchlistid" },
        ]
      },
    ]
  });
  }
}
