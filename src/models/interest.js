const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return interest.init(sequelize, DataTypes);
}

class interest extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    interestid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.CHAR(255),
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
    tableName: 'interest',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_interest",
        unique: true,
        fields: [
          { name: "interestid" },
        ]
      },
    ]
  });
  }
}
