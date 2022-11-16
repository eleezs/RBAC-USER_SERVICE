const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessmentrating.init(sequelize, DataTypes);
}

class assessmentrating extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
