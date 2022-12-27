const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviewscore', {
    reviewscoreid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchreviewid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reviewcategoryid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    score: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Range 1 to 5"
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
    tableName: 'reviewscore',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewscore_pitchreview",
        fields: [
          { name: "pitchreviewid" },
        ]
      },
      {
        name: "idx_fk_reviewscore_reviewcategory",
        fields: [
          { name: "reviewcategoryid" },
        ]
      },
      {
        name: "pk_reviewscore",
        unique: true,
        fields: [
          { name: "reviewscoreid" },
        ]
      },
      {
        name: "reviewscore_pkey",
        unique: true,
        fields: [
          { name: "reviewscoreid" },
        ]
      },
    ]
  });
};
