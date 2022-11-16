const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return maritalstatustype.init(sequelize, DataTypes);
}

class maritalstatustype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maritalstatustypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    maritalstatustype: {
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
    tableName: 'maritalstatustype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_maritalstatustype",
        unique: true,
        fields: [
          { name: "maritalstatustypeid" },
        ]
      },
    ]
  });
  }
}
