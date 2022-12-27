const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kycperson', {
    kycpersonid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kycpersonroleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    middlename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dateofbirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(20),
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
    tableName: 'kycperson',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kycperson_kyc",
        fields: [
          { name: "kycid" },
        ]
      },
      {
        name: "idx_fk_kycperson_kycpersonrole",
        fields: [
          { name: "kycpersonroleid" },
        ]
      },
      {
        name: "kycperson_pkey",
        unique: true,
        fields: [
          { name: "kycpersonid" },
        ]
      },
      {
        name: "pk_kycperson",
        unique: true,
        fields: [
          { name: "kycpersonid" },
        ]
      },
    ]
  });
};
