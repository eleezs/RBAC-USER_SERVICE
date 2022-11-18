const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessorinstitution.init(sequelize, DataTypes);
}

class assessorinstitution extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
