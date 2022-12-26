const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessorprofessionalqualification', {
    assessorprofessionalqualificationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    professionalqualificationid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    certificateno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dateissued: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    expirydate: {
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
    tableName: 'assessorprofessionalqualification',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessorprofessionalqualification_pkey",
        unique: true,
        fields: [
          { name: "assessorprofessionalqualificationid" },
        ]
      },
      {
        name: "idx_fk_assessorprofessionalqualification_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "idx_fk_assessorprofessionalqualification_professionalqualificat",
        fields: [
          { name: "professionalqualificationid" },
        ]
      },
      {
        name: "pk_assessorprofessionalqualification",
        unique: true,
        fields: [
          { name: "assessorprofessionalqualificationid" },
        ]
      },
    ]
  });
};
