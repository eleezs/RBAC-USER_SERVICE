const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return accessgroup.init(sequelize, DataTypes);
}

class accessgroup extends Sequelize.Model {
	static associate (model) {
		accessgroup.hasMany(models.groupmember, {
			foreignKey: accessgroupid
		})
	}
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_accessgroup",
        unique: true,
        fields: [
          { name: "accessgroupid" },
        ]
      },
    ]
  });
  }
}
