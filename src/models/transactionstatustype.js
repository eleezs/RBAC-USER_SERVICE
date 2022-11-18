const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transactionstatustype.init(sequelize, DataTypes);
}

class transactionstatustype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transactionstatustypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    transactionstatustype: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
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
    tableName: 'transactionstatustype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_transactionstatustype",
        unique: true,
        fields: [
          { name: "transactionstatustypeid" },
        ]
      },
    ]
  });
  }
}
