const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationauthorization.init(sequelize, DataTypes);
}

class organizationauthorization extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationauthorizationid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    organizationuserroletypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationauthorization: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'organizationauthorization',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationauthorization_organizationuserroletype",
        fields: [
          { name: "organizationuserroletypeid" },
        ]
      },
      {
        name: "pk_organizationauthorization",
        unique: true,
        fields: [
          { name: "organizationauthorizationid" },
        ]
      },
    ]
  });
  }
}
