const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationinvestmentparticipationlevel.init(sequelize, DataTypes);
}

class organizationinvestmentparticipationlevel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationinvestmentparticipationlevelid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    organizationinvestmentparticipationlevel: {
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
    tableName: 'organizationinvestmentparticipationlevel',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationinvestmentparticipationlevel",
        unique: true,
        fields: [
          { name: "organizationinvestmentparticipationlevelid" },
        ]
      },
    ]
  });
  }
}
