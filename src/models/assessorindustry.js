const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessorindustry.init(sequelize, DataTypes);
}

class assessorindustry extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessorindustryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    industryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    yearsofexperience: {
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
    tableName: 'assessorindustry',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessorindustry_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessorindustry_industry",
        fields: [
          { name: "industryid" },
        ]
      },
      {
        name: "pk_assessorindustry",
        unique: true,
        fields: [
          { name: "assessorindustryid" },
        ]
      },
    ]
  });
  }
}
