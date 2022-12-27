const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personinterest', {
    personinterestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    interestid: {
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
    tableName: 'personinterest',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_personinterest_interest",
        fields: [
          { name: "interestid" },
        ]
      },
      {
        name: "idx_fk_personinterest_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "personinterest_pkey",
        unique: true,
        fields: [
          { name: "personinterestid" },
        ]
      },
      {
        name: "pk_personinterest",
        unique: true,
        fields: [
          { name: "personinterestid" },
        ]
      },
    ]
  });
};
