const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationserviceoffering.init(sequelize, DataTypes);
}

class organizationserviceoffering extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationserviceofferingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationserviceofferingtypeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rate: {
      type: DataTypes.DECIMAL(19,4),
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
    tableName: 'organizationserviceoffering',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationserviceoffering_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_organizationserviceoffering_organizationserviceofferingt",
        fields: [
          { name: "organizationserviceofferingtypeid" },
        ]
      },
      {
        name: "pk_organizationserviceoffering",
        unique: true,
        fields: [
          { name: "organizationserviceofferingid" },
        ]
      },
    ]
  });
  }
}
