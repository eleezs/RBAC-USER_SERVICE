const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycidentifiertype.init(sequelize, DataTypes);
}

class kycidentifiertype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycidentifiertypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    kycidentifiertype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
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
    tableName: 'kycidentifiertype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_kycidentifiertype",
        unique: true,
        fields: [
          { name: "kycidentifiertypeid" },
        ]
      },
    ]
  });
  }
}
