const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitcher.init(sequelize, DataTypes);
}

class pitcher extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitcherid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    profilesummary: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    accessuserid: {
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
    tableName: 'pitcher',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitcher_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_pitcher",
        unique: true,
        fields: [
          { name: "pitcherid" },
        ]
      },
    ]
  });
  }
}
