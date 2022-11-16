const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessmenttask.init(sequelize, DataTypes);
}

class assessmenttask extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessmenttaskid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tasktitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tasktext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    responsetitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    responsetext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assessmenttaskcomment: {
      type: DataTypes.STRING(500),
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
    tableName: 'assessmenttask',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessmenttask_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "pk_assessmenttask",
        unique: true,
        fields: [
          { name: "assessmenttaskid" },
        ]
      },
    ]
  });
  }
}
