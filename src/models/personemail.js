const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return personemail.init(sequelize, DataTypes);
}

class personemail extends Sequelize.Model {
  static associate(models) {
    // define associations
    personemail.belongsTo(models.person, {
      foreignKey: 'personid'
    }),

    personemail.hasMany(models.email, {
      foreignKey: 'emailid'
    })
  }
  static init(sequelize, DataTypes) {
  return super.init({
    personemailid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
			autoIncrement: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    emailid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isprimary: {
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
    tableName: 'personemail',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_personemail_email",
        fields: [
          { name: "emailid" },
        ]
      },
      {
        name: "idx_fk_personemail_person",
        fields: [
          { name: "personid" },
        ]
      },
      {
        name: "pk_personemail",
        unique: true,
        fields: [
          { name: "personemailid" },
        ]
      },
    ]
  });
  }
}
