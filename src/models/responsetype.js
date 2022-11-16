const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return responsetype.init(sequelize, DataTypes);
}

class responsetype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    responsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    responsetype: {
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
    tableName: 'responsetype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_responsetype",
        unique: true,
        fields: [
          { name: "responsetypeid" },
        ]
      },
    ]
  });
  }
}
