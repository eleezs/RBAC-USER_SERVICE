const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationavailability.init(sequelize, DataTypes);
}

class organizationavailability extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationavailabilityid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timefrom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timeto: {
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
    tableName: 'organizationavailability',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_organizationavailability",
        unique: true,
        fields: [
          { name: "organizationavailabilityid" },
        ]
      },
    ]
  });
  }
}
