const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return newslettersubscription.init(sequelize, DataTypes);
}

class newslettersubscription extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    newsletterid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isactive: {
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
    tableName: 'newslettersubscription',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_newslettersubscription",
        unique: true,
        fields: [
          { name: "newsletterid" },
        ]
      },
    ]
  });
  }
}
