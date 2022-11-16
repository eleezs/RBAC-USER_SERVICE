const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessor.init(sequelize, DataTypes);
}

class assessor extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    profilesummary: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    highestlevelofeducation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    specialization: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    feecurrencyid: {
      type: DataTypes.SMALLINT,
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
    tableName: 'assessor',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessor_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_assessor_currency",
        fields: [
          { name: "feecurrencyid" },
        ]
      },
      {
        name: "pk_assessor",
        unique: true,
        fields: [
          { name: "assessorid" },
        ]
      },
    ]
  });
  }
}
