const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectinvestorreportlike.init(sequelize, DataTypes);
}

class projectinvestorreportlike extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectinvestorreportlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    isdislike: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    projectinvestorreportid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accessuserid: {
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
    tableName: 'projectinvestorreportlike',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectinvestorreportlike_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_projectinvestorreportlike_projectinvestorreport",
        fields: [
          { name: "projectinvestorreportid" },
        ]
      },
      {
        name: "pk_projectinvestorreportlike",
        unique: true,
        fields: [
          { name: "projectinvestorreportlikeid" },
        ]
      },
    ]
  });
  }
}
