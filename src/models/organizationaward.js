const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationaward.init(sequelize, DataTypes);
}

class organizationaward extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationawardid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationaward: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(50),
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
    tableName: 'organizationaward',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationaward_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organizationaward",
        unique: true,
        fields: [
          { name: "organizationawardid" },
        ]
      },
    ]
  });
  }
}
