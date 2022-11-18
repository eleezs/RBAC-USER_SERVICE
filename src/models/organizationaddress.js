const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationaddress.init(sequelize, DataTypes);
}

class organizationaddress extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isheadquarters: {
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
    tableName: 'organizationaddress',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationaddress_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_organizationaddress_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organizationaddress",
        unique: true,
        fields: [
          { name: "organizationaddressid" },
        ]
      },
    ]
  });
  }
}
