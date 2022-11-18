const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return institution.init(sequelize, DataTypes);
}

class institution extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    institutionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    countryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    institution: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    logo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    isdefunct: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'institution',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_institution_country",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "pk_institution",
        unique: true,
        fields: [
          { name: "institutionid" },
        ]
      },
    ]
  });
  }
}
