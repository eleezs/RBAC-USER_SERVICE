const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizationphone.init(sequelize, DataTypes);
}

class organizationphone extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    organizationphoneid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    phonenumberid: {
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
    tableName: 'organizationphone',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_organizationphone_organization",
        fields: [
          { name: "organizationid" },
        ]
      },
      {
        name: "idx_fk_organizationphone_phonenumber",
        fields: [
          { name: "phonenumberid" },
        ]
      },
      {
        name: "pk_organizationphone",
        unique: true,
        fields: [
          { name: "organizationphoneid" },
        ]
      },
    ]
  });
  }
}
