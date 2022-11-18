const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessorprofessionalqualification.init(sequelize, DataTypes);
}

class assessorprofessionalqualification extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
