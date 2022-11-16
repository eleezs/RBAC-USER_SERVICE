const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return award.init(sequelize, DataTypes);
}

class award extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    awardid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    award: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    awardingbody: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    industryid: {
      type: DataTypes.SMALLINT,
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
    tableName: 'award',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_award_industry",
        fields: [
          { name: "industryid" },
        ]
      },
      {
        name: "pk_award",
        unique: true,
        fields: [
          { name: "awardid" },
        ]
      },
    ]
  });
  }
}
