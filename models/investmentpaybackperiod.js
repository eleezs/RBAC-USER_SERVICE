const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('investmentpaybackperiod', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "investmentpaybackperiod_pkey",
        unique: true,
        fields: [
          { name: "investmentpaybackperiodid" },
        ]
      },
      {
        name: "pk_investmentpaybackperiod",
        unique: true,
        fields: [
          { name: "investmentpaybackperiodid" },
        ]
      },
    ]
  });
};
