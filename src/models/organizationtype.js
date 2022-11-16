const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationtype.init(sequelize, DataTypes);
}

class organizationtype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    organizationtype: {
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
    tableName: 'organizationtype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationtype",
        unique: true,
        fields: [
          { name: "organizationtypeid" },
        ]
      },
    ]
  });
  }
}
