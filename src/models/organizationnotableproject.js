const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationnotableproject.init(sequelize, DataTypes);
}

class organizationnotableproject extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationnotableprojectd: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organizationid: {
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
    tableName: 'organizationnotableproject',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationnotableproject_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organizationnotableproject",
        unique: true,
        fields: [
          { name: "organizationnotableprojectd" },
        ]
      },
    ]
  });
  }
}
