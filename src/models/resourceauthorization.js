const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return resourceauthorization.init(sequelize, DataTypes);
}

class resourceauthorization extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    resourceauthorizationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    authorizationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    resourceid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    authorizationexpires: {
      type: DataTypes.DATE,
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
    },
    accessgroupid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'resourceauthorization',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_resourceauthorization_authorizationtype",
        fields: [
          { name: "authorizationtypeid" },
        ]
      },
      {
        name: "idx_fk_resourceauthorization_resource",
        fields: [
          { name: "resourceid" },
        ]
      },
      {
        name: "pk_resourceauthorization",
        unique: true,
        fields: [
          { name: "resourceauthorizationid" },
        ]
      },
    ]
  });
  }
}
