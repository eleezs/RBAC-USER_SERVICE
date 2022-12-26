const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('investorinstitution', {
    investorinstitutionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    investorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    institutionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datefrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateto: {
      type: DataTypes.DATEONLY,
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
    tableName: 'investorinstitution',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_investorinstitution_institution",
        fields: [
          { name: "institutionid" },
        ]
      },
      {
        name: "idx_fk_investorinstitution_investor",
        fields: [
          { name: "investorid" },
        ]
      },
      {
        name: "investorinstitution_pkey",
        unique: true,
        fields: [
          { name: "investorinstitutionid" },
        ]
      },
      {
        name: "pk_investorinstitution",
        unique: true,
        fields: [
          { name: "investorinstitutionid" },
        ]
      },
    ]
  });
};
