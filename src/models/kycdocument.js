const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return kycdocument.init(sequelize, DataTypes);
}

class kycdocument extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kycdocumentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kycid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kycdocumenttypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    filepath: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fileextension: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    filecaption: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isdeleted: {
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
    tableName: 'kycdocument',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_kycdocument_kyc",
        fields: [
          { name: "kycid" },
        ]
      },
      {
        name: "idx_fk_kycdocument_kycdocumenttype",
        fields: [
          { name: "kycdocumenttypeid" },
        ]
      },
      {
        name: "pk_kycdocument",
        unique: true,
        fields: [
          { name: "kycdocumentid" },
        ]
      },
    ]
  });
  }
}
