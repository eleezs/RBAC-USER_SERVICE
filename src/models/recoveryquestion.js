const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return recoveryquestion.init(sequelize, DataTypes);
}

class recoveryquestion extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    recoveryquestionid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isactive: {
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
    tableName: 'recoveryquestion',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_recoveryquestion",
        unique: true,
        fields: [
          { name: "recoveryquestionid" },
        ]
      },
    ]
  });
  }
}
