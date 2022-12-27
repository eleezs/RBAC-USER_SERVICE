const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('award', {
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
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "award_pkey",
        unique: true,
        fields: [
          { name: "awardid" },
        ]
      },
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
};
