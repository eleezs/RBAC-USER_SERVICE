const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return addresstype.init(sequelize, DataTypes);
}

class addresstype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    addresstypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    addresstype: {
      type: DataTypes.STRING(50),
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
    tableName: 'addresstype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_addresstype",
        unique: true,
        fields: [
          { name: "addresstypeid" },
        ]
      },
    ]
  });
  }
}
