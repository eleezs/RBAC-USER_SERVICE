const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return phonenumber.init(sequelize, DataTypes);
}

class phonenumber extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    phonenumberid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    phonecodeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
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
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_phonenumber_phonecode",
        fields: [
          { name: "phonecodeid" },
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
  }
}
