const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bank.init(sequelize, DataTypes);
}

class bank extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bankid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bankname: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    branchcode: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
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
    tableName: 'bank',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_bank_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "pk_bank",
        unique: true,
        fields: [
          { name: "bankid" },
        ]
      },
    ]
  });
  }
}
