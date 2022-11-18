const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectinvestorreport.init(sequelize, DataTypes);
}

class projectinvestorreport extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectinvestorreportid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descritpion: {
      type: DataTypes.STRING(5000),
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
    tableName: 'projectinvestorreport',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectinvestorreport_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectinvestorreport",
        unique: true,
        fields: [
          { name: "projectinvestorreportid" },
        ]
      },
    ]
  });
  }
}
