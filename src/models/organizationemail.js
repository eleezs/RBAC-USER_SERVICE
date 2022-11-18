const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationemail.init(sequelize, DataTypes);
}

class organizationemail extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationemailid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
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
    tableName: 'organizationemail',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationemail_email",
        fields: [
          { name: "emailid" },
        ]
      },
      {
        name: "idx_fk_organizationemail_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organizationemail",
        unique: true,
        fields: [
          { name: "organizationemailid" },
        ]
      },
    ]
  });
  }
}
