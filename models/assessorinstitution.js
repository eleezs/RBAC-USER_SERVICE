const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessorinstitution', {
    assessorinstitutionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
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
    tableName: 'assessorinstitution',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessorinstitution_pkey",
        unique: true,
        fields: [
          { name: "assessorinstitutionid" },
        ]
      },
      {
        name: "idx_fk_assessorinstitution_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessorinstitution_institution",
        fields: [
          { name: "institutionid" },
        ]
      },
      {
        name: "pk_assessorinstitution",
        unique: true,
        fields: [
          { name: "assessorinstitutionid" },
        ]
      },
    ]
  });
};
