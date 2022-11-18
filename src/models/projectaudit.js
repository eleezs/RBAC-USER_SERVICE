const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectaudit.init(sequelize, DataTypes);
}

class projectaudit extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectauditid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    assessmentid: {
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
    tableName: 'projectaudit',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectaudit_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "idx_fk_projectaudit_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectaudit",
        unique: true,
        fields: [
          { name: "projectauditid" },
        ]
      },
    ]
  });
  }
}
