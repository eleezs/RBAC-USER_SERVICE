const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycaddress.init(sequelize, DataTypes);
}

class kycaddress extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycaddressid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    addresstypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    cityid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressline1: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    addressline2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    streetnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    buildingnumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
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
    tableName: 'kycaddress',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_kycaddress",
        unique: true,
        fields: [
          { name: "kycaddressid" },
        ]
      },
    ]
  });
  }
}
