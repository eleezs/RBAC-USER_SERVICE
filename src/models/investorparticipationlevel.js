const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return investorparticipationlevel.init(sequelize, DataTypes);
}

class investorparticipationlevel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    investorparticipationlevelid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
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
    tableName: 'investorparticipationlevel',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_investorparticipationlevel",
        unique: true,
        fields: [
          { name: "investorparticipationlevelid" },
        ]
      },
    ]
  });
  }
}
