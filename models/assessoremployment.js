const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessoremployment', {
    assessoremploymentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employername: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employercountry: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    showonprofile: {
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
    tableName: 'assessoremployment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessoremployment_pkey",
        unique: true,
        fields: [
          { name: "assessoremploymentid" },
        ]
      },
      {
        name: "idx_fk_assessoremployment_assessor",
        fields: [
          { name: "assessorid" },
        ]
      },
      {
        name: "pk_assessoremployment",
        unique: true,
        fields: [
          { name: "assessoremploymentid" },
        ]
      },
    ]
  });
};
