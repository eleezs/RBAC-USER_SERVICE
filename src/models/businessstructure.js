const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return businessstructure.init(sequelize, DataTypes);
}

class businessstructure extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessstructureid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
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
    tableName: 'businessstructure',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_businessstructure",
        unique: true,
        fields: [
          { name: "businessstructureid" },
        ]
      },
    ]
  });
  }
}
