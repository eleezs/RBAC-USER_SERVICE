const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationinvestmentstructuretype.init(sequelize, DataTypes);
}

class organizationinvestmentstructuretype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationinvestmentstructuretypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationinvestmentstructuretype: {
      type: DataTypes.STRING(100),
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
    tableName: 'organizationinvestmentstructuretype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationinvestmentstructuretype",
        unique: true,
        fields: [
          { name: "organizationinvestmentstructuretypeid" },
        ]
      },
    ]
  });
  }
}
