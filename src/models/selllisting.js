const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return selllisting.init(sequelize, DataTypes);
}

class selllisting extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    selllistingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unitprice: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    expireat: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isactive: {
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
    tableName: 'selllisting',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_selllisting_item",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "pk_selllisting",
        unique: true,
        fields: [
          { name: "selllistingid" },
        ]
      },
    ]
  });
  }
}
