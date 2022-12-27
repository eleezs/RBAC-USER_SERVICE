const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization', {
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationname: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    organizationinvestmentparticipationlevelid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    organizationinvestmentstructuretypeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    organizationinvestmentsourcetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    organizationavailabilityid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    registrationstateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    registrationcountryid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    organizationtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    numberofemployees: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    registeredcompanynumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    taxidentificationnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    establishedon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uniquesellingproposition: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    investmentamount: {
      type: DataTypes.DECIMAL,
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
    tableName: 'organization',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organization_country",
        fields: [
          { name: "registrationcountryid" },
        ]
      },
      {
        name: "idx_fk_organization_countrystate",
        fields: [
          { name: "registrationstateid" },
        ]
      },
      {
        name: "idx_fk_organization_organizationavailability",
        fields: [
          { name: "organizationavailabilityid" },
        ]
      },
      {
        name: "idx_fk_organization_organizationinvestmentparticipationlevel",
        fields: [
          { name: "organizationinvestmentparticipationlevelid" },
        ]
      },
      {
        name: "idx_fk_organization_organizationinvestmentsourcetype",
        fields: [
          { name: "organizationinvestmentsourcetypeid" },
        ]
      },
      {
        name: "idx_fk_organization_organizationinvestmentstructuretype",
        fields: [
          { name: "organizationinvestmentstructuretypeid" },
        ]
      },
      {
        name: "idx_fk_organization_organizationtype",
        fields: [
          { name: "organizationtypeid" },
        ]
      },
      {
        name: "organization_pkey",
        unique: true,
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "pk_organization",
        unique: true,
        fields: [
          { name: "organizationid" },
        ]
      },
    ]
  });
};
