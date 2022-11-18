const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycpersonrole.init(sequelize, DataTypes);
}

class kycpersonrole extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycpersonroleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kycpersonrole: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
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
    tableName: 'kycpersonrole',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_kycpersonrole",
        unique: true,
        fields: [
          { name: "kycpersonroleid" },
        ]
      },
    ]
  });
  }
}
