const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessgroup', {
    accessgroupid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    groupname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    effectivedate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isactive: {
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
    tableName: 'accessgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "accessgroup_pkey",
        unique: true,
        fields: [
          { name: "accessgroupid" },
        ]
      },
      {
        name: "pk_accessgroup",
        unique: true,
        fields: [
          { name: "accessgroupid" },
        ]
      },
    ]
  });
};
