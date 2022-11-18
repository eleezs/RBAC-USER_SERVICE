const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycrejectionreason.init(sequelize, DataTypes);
}

class kycrejectionreason extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycrejectionreasonid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    reason: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    isretired: {
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
    tableName: 'kycrejectionreason',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_kycrejectionreason",
        unique: true,
        fields: [
          { name: "kycrejectionreasonid" },
        ]
      },
    ]
  });
  }
}
