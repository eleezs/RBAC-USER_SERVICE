const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return resource.init(sequelize, DataTypes);
}

class resource extends Sequelize.Model {
	static assocition(models) {
		resource.hasOne(models.resourceauthorization, {
			foreignKey: resourceid
		})
	}

	static init(sequelize, DataTypes) {
  return super.init({
    resourceid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    resource: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    parentresourceid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
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
    tableName: 'resource',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_resource_parentresourceid",
        fields: [
          { name: "parentresourceid" },
        ]
      },
      {
        name: "pk_resource",
        unique: true,
        fields: [
          { name: "resourceid" },
        ]
      },
    ]
  });
  }
}
