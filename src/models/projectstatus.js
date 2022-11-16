const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectstatus.init(sequelize, DataTypes);
}

class projectstatus extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectstatusid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    projectstatus: {
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
    tableName: 'projectstatus',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_projectstatus",
        unique: true,
        fields: [
          { name: "projectstatusid" },
        ]
      },
    ]
  });
  }
}
