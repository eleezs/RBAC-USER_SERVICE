const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personphone', {
    personphoneid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    phonenumberid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isprimary: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'personphone',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_personphone_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "idx_fk_personphone_phonenumber",
        fields: [
          { name: "phonenumberid" },
        ]
      },
      {
        name: "personphone_pkey",
        unique: true,
        fields: [
          { name: "personphoneid" },
        ]
      },
      {
        name: "pk_personphone",
        unique: true,
        fields: [
          { name: "personphoneid" },
        ]
      },
    ]
  });
};
