const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personemail', {
    personemailid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'person',
        key: 'personid'
      }
    },
    emailid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'email',
        key: 'emailid'
      }
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
    schema: 'public',
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
        name: "personemail_pkey",
        unique: true,
        fields: [
          { name: "personemailid" },
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
};
