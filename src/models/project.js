const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return project.init(sequelize, DataTypes);
}

class project extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    projectstatusid: {
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
    tableName: 'project',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_project_pitch",
        fields: [
          { name: "pitchid" },
        ]
      },
      {
        name: "idx_fk_project_projectstatus",
        fields: [
          { name: "projectstatusid" },
        ]
      },
      {
        name: "pk_project",
        unique: true,
        fields: [
          { name: "projectid" },
        ]
      },
    ]
  });
  }
}
