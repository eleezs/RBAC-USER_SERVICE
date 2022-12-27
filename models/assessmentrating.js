const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assessmentrating', {
    assessmentratingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rating: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    assessmentratingcomment: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'assessmentrating',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessmentrating_pkey",
        unique: true,
        fields: [
          { name: "assessmentratingid" },
        ]
      },
      {
        name: "idx_fk_assessmentrating_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "pk_assessmentrating",
        unique: true,
        fields: [
          { name: "assessmentratingid" },
        ]
      },
    ]
  });
};
