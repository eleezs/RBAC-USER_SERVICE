const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationinvitation.init(sequelize, DataTypes);
}

class organizationinvitation extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationinvitationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    invitedby: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    phonenumberid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    emailid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    invitationcode: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    acceptedon: {
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
    tableName: 'organizationinvitation',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationinvitation_accessuser",
        fields: [
          { name: "invitedby" },
        ]
      },
      {
        name: "idx_fk_organizationinvitation_email",
        fields: [
          { name: "emailid" },
        ]
      },
      {
        name: "idx_fk_organizationinvitation_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_organizationinvitation_phonenumber",
        fields: [
          { name: "phonenumberid" },
        ]
      },
      {
        name: "pk_organizationinvitation",
        unique: true,
        fields: [
          { name: "organizationinvitationid" },
        ]
      },
    ]
  });
  }
}
