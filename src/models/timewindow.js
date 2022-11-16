const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return timewindow.init(sequelize, DataTypes);
}

class timewindow extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    timewindowid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    timewindow: {
      type: DataTypes.STRING(50),
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
    tableName: 'timewindow',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_timewindow",
        unique: true,
        fields: [
          { name: "timewindowid" },
        ]
      },
    ]
  });
  }
}
