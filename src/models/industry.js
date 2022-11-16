const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return industry.init(sequelize, DataTypes);
}

class industry extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    industryid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    industryname: {
      type: DataTypes.CHAR(200),
      allowNull: false
    },
    industrycode: {
      type: DataTypes.CHAR(10),
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
    tableName: 'industry',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_industry",
        unique: true,
        fields: [
          { name: "industryid" },
        ]
      },
    ]
  });
  }
}
