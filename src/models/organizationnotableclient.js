const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationnotableclient.init(sequelize, DataTypes);
}

class organizationnotableclient extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationnotableclientid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    clientname: {
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
    tableName: 'organizationnotableclient',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationnotableclient_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organizationnotableclient",
        unique: true,
        fields: [
          { name: "organizationnotableclientid" },
        ]
      },
    ]
  });
  }
}
