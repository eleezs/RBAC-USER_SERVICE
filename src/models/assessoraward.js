const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessoraward.init(sequelize, DataTypes);
}

class assessoraward extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessorawardid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    awardid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dateawarded: {
      type: DataTypes.DATEONLY,
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
    tableName: 'assessoraward',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessoraward_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessoraward_award",
        fields: [
          { name: "awardid" },
        ]
      },
      {
        name: "pk_assessoraward",
        unique: true,
        fields: [
          { name: "assessorawardid" },
        ]
      },
    ]
  });
  }
}
