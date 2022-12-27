const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phonenumber', {
    phonenumberid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    phonecodeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'phonecode',
        key: 'phonecodeid'
      }
    },
    phonenumber: {
      type: DataTypes.CHAR(20),
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
    tableName: 'phonenumber',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_phonenumber_phonecode",
        fields: [
          { name: "phonecodeid" },
        ]
      },
      {
        name: "phonenumber_pkey",
        unique: true,
        fields: [
          { name: "phonenumberid" },
        ]
      },
      {
        name: "pk_phonenumber",
        unique: true,
        fields: [
          { name: "phonenumberid" },
        ]
      },
      {
        name: "uk_phonenumber_phonenumber",
        unique: true,
        fields: [
          { name: "phonenumber" },
        ]
      },
    ]
  });
};
