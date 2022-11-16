const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycidentifier.init(sequelize, DataTypes);
}

class kycidentifier extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycidentifierid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kycpersonid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycidentifiertypeid: {
      type: DataTypes.SMALLINT,
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
    tableName: 'kycidentifier',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kycidentifier_kycidentifiertype",
        fields: [
          { name: "kycidentifiertypeid" },
        ]
      },
      {
        name: "idx_fk_kycidentifier_kycperson",
        fields: [
          { name: "kycpersonid" },
        ]
      },
      {
        name: "pk_kycidentifier",
        unique: true,
        fields: [
          { name: "kycidentifierid" },
        ]
      },
    ]
  });
  }
}
