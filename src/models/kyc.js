const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kyc.init(sequelize, DataTypes);
}

class kyc extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
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
    tableName: 'kyc',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kyc_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_kyc",
        unique: true,
        fields: [
          { name: "kycid" },
        ]
      },
    ]
  });
  }
}
