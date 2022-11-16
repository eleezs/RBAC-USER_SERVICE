const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectmotion.init(sequelize, DataTypes);
}

class projectmotion extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectmotionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
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
    startdatetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    enddatetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    motionpassed: {
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
    tableName: 'projectmotion',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectmotion_project",
        fields: [
          { name: "projectid" },
        ]
      },
      {
        name: "pk_projectmotion",
        unique: true,
        fields: [
          { name: "projectmotionid" },
        ]
      },
    ]
  });
  }
}
