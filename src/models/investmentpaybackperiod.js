const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return investmentpaybackperiod.init(sequelize, DataTypes);
}

class investmentpaybackperiod extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    investmentpaybackperiodid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    timeperiod: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'investmentpaybackperiod',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_investmentpaybackperiod",
        unique: true,
        fields: [
          { name: "investmentpaybackperiodid" },
        ]
      },
    ]
  });
  }
}
