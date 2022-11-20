const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return userrecoveryquestion.init(sequelize, DataTypes);
}

class userrecoveryquestion extends Sequelize.Model {
	static associate(models) {
		userrecoveryquestion.hasMany(models.recoveryquestion, {
			foreignKey: 'recoveryquestionid'
		})
	}
  static init(sequelize, DataTypes) {
  return super.init({
    userrecoveryquestionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    recoveryquestionid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    answer: {
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
    tableName: 'userrecoveryquestion',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_userrecoveryquestion_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_userrecoveryquestion_recoveryquestion",
        fields: [
          { name: "recoveryquestionid" },
        ]
      },
      {
        name: "pk_userrecoveryquestion",
        unique: true,
        fields: [
          { name: "userrecoveryquestionid" },
        ]
      },
    ]
  });
  }
}
