const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessoraccomplishment', {
    assessoraccomplishmentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    desctiption: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    assessoraccomplishment: {
      type: DataTypes.INTEGER,
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
    tableName: 'assessoraccomplishment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessoraccomplishment_pkey",
        unique: true,
        fields: [
          { name: "assessoraccomplishmentid" },
        ]
      },
      {
        name: "idx_fk_assessoraccomplishment_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "pk_assessoraccomplishment",
        unique: true,
        fields: [
          { name: "assessoraccomplishmentid" },
        ]
      },
    ]
  });
};
