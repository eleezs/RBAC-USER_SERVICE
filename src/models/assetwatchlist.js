const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assetwatchlist.init(sequelize, DataTypes);
}

class assetwatchlist extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assetwatchlistid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    assetid: {
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
    tableName: 'assetwatchlist',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assetwatchlist_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_assetwatchlist_asset",
        fields: [
          { name: "assetid" },
        ]
      },
      {
        name: "pk_assetwatchlist",
        unique: true,
        fields: [
          { name: "assetwatchlistid" },
        ]
      },
    ]
  });
  }
}
