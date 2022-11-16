const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return logreason.init(sequelize, DataTypes);
}

class logreason extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    logreasonid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'logreason',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_logreason",
        unique: true,
        fields: [
          { name: "logreasonid" },
        ]
      },
    ]
  });
  }
}
