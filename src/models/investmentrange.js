const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return investmentrange.init(sequelize, DataTypes);
}

class investmentrange extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    investmentrangeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    currency: {
      type: DataTypes.CHAR(10),
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
    tableName: 'investmentrange',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_investmentrange",
        unique: true,
        fields: [
          { name: "investmentrangeid" },
        ]
      },
    ]
  });
  }
}
