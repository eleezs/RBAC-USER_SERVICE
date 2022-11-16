const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return personinterest.init(sequelize, DataTypes);
}

class personinterest extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
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
        name: "pk_personinterest",
        unique: true,
        fields: [
          { name: "personinterestid" },
        ]
      },
    ]
  });
  }
}
