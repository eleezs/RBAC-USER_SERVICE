const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectmilestone.init(sequelize, DataTypes);
}

class projectmilestone extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectmilestoneid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    projectid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    datecompleted: {
      type: DataTypes.DATEONLY,
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
    tableName: 'projectmilestone',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmilestone_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectmilestone",
        unique: true,
        fields: [
          { name: "projectmilestoneid" },
        ]
      },
    ]
  });
  }
}
