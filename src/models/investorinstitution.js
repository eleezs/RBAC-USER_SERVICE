const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return investorinstitution.init(sequelize, DataTypes);
}

class investorinstitution extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_investorinstitution",
        unique: true,
        fields: [
          { name: "investorinstitutionid" },
        ]
      },
    ]
  });
  }
}
