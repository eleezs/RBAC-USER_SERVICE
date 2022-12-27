const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email', {
    emailid: {
      autoIncrement: true,
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "email_pkey",
        unique: true,
        fields: [
          { name: "emailid" },
        ]
      },
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
};
