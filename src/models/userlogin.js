const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userlogin.init(sequelize, DataTypes);
}

class userlogin extends Sequelize.Model {
	static associate(models) {
		userlogin.belongsTo(models.accessuser, {
			foreignKey: 'accessuserid'
		})
	}
  static init(sequelize, DataTypes) {
  return super.init({
    userloginid: {
      type: DataTypes.BIGINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    passwordsalt: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    passwordhash: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    accesstoken: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    expiredon: {
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
    },
    ssouserid: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userlogin',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userlogin_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "pk_userlogin",
        unique: true,
        fields: [
          { name: "userloginid" },
        ]
      }
    ]
  });
  }
}
