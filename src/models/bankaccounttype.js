const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bankaccounttype.init(sequelize, DataTypes);
}

class bankaccounttype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankaccounttypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    bankaccounttype: {
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
    tableName: 'bankaccounttype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_bankaccounttype",
        unique: true,
        fields: [
          { name: "bankaccounttypeid" },
        ]
      },
    ]
  });
  }
}
