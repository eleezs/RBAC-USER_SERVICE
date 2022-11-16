const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userrole.init(sequelize, DataTypes);
}

class userrole extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userroleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    roleid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    effectivedate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATE,
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
    tableName: 'userrole',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userrole_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_userrole_roletype",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "pk_userrole",
        unique: true,
        fields: [
          { name: "userroleid" },
        ]
      },
    ]
  });
  }
}
