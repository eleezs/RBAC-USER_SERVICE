const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return email.init(sequelize, DataTypes);
}

class email extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    emailid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
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
    tableName: 'email',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_email",
        unique: true,
        fields: [
          { name: "emailid" },
        ]
      },
      {
        name: "uk_email_email",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
