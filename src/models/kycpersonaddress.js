const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycpersonaddress.init(sequelize, DataTypes);
}

class kycpersonaddress extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycpersonaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kycpersonid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycaddressid: {
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
    tableName: 'kycpersonaddress',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "fk_kycpersonaddress_kycaddress",
        fields: [
          { name: "kycaddressid" },
        ]
      },
      {
        name: "fk_kycpersonaddress_kycperson",
        fields: [
          { name: "kycpersonid" },
        ]
      },
      {
        name: "pk_kycpersonaddress",
        unique: true,
        fields: [
          { name: "kycpersonaddressid" },
        ]
      },
    ]
  });
  }
}
