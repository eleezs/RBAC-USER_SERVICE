const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return authorizationtype.init(sequelize, DataTypes);
}

class authorizationtype extends Sequelize.Model {
	static associate(models) {
		authorizationtype.hasMany(models.resourcesautorization, {
			foreignKey: authorizationtypeid
		})
	}

  static init(sequelize, DataTypes) {
  return super.init({
    authorizationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    authorizationtype: {
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
    tableName: 'authorizationtype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_authorizationtype",
        unique: true,
        fields: [
          { name: "authorizationtypeid" },
        ]
      },
    ]
  });
  }
}
