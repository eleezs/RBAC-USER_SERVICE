const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycrejectionreason', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "kycrejectionreason_pkey",
        unique: true,
        fields: [
          { name: "kycrejectionreasonid" },
        ]
      },
      {
        name: "pk_kycrejectionreason",
        unique: true,
        fields: [
          { name: "kycrejectionreasonid" },
        ]
      },
    ]
  });
};
