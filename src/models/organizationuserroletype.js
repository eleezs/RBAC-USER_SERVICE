const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationuserroletype.init(sequelize, DataTypes);
}

class organizationuserroletype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationuserroletypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationuserroletype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'organizationuserroletype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationuserroletype",
        unique: true,
        fields: [
          { name: "organizationuserroletypeid" },
        ]
      },
    ]
  });
  }
}
