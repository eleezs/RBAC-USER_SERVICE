const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationinvestmentsourcetype.init(sequelize, DataTypes);
}

class organizationinvestmentsourcetype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationinvestmentsourcetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationinvestmentsourcetype: {
      type: DataTypes.STRING(50),
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
    tableName: 'organizationinvestmentsourcetype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationinvestmentsourcetype",
        unique: true,
        fields: [
          { name: "organizationinvestmentsourcetypeid" },
        ]
      },
    ]
  });
  }
}
