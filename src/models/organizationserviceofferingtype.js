const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationserviceofferingtype.init(sequelize, DataTypes);
}

class organizationserviceofferingtype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationserviceofferingtypeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offering: {
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
    tableName: 'organizationserviceofferingtype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationserviceofferingtype",
        unique: true,
        fields: [
          { name: "organizationserviceofferingtypeid" },
        ]
      },
    ]
  });
  }
}
