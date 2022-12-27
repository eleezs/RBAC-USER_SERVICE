const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userinteresttag', {
    userinteresttagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    interesttagid: {
      type: DataTypes.BIGINT,
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
    tableName: 'userinteresttag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fk_userinteresttag_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "fk_userinteresttag_interesttag",
        fields: [
          { name: "interesttagid" },
        ]
      },
      {
        name: "pk_userinteresttag",
        unique: true,
        fields: [
          { name: "userinteresttagid" },
        ]
      },
      {
        name: "userinteresttag_pkey",
        unique: true,
        fields: [
          { name: "userinteresttagid" },
        ]
      },
    ]
  });
};
