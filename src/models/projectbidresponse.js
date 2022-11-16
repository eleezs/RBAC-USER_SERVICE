const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return projectbidresponse.init(sequelize, DataTypes);
}

class projectbidresponse extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    projectbidresponseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    responsesequence: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    projectbidid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    projectbidresponsetypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    projectbidresponse: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    transactioneventid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    isbidderresponse: {
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
    tableName: 'projectbidresponse',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectbidresponse_projectbid",
        fields: [
          { name: "projectbidid" },
        ]
      },
      {
        name: "idx_fk_projectbidresponse_projectbidresponsetype",
        fields: [
          { name: "projectbidresponsetypeid" },
        ]
      },
      {
        name: "idx_fk_projectbidresponse_transactionevent",
        fields: [
          { name: "transactioneventid" },
        ]
      },
      {
        name: "pk_projectbidresponse",
        unique: true,
        fields: [
          { name: "projectbidresponseid" },
        ]
      },
    ]
  });
  }
}
