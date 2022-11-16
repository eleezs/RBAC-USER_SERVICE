const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reviewscore.init(sequelize, DataTypes);
}

class reviewscore extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
    ]
  });
  }
}
