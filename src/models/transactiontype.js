const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return transactiontype.init(sequelize, DataTypes);
}

class transactiontype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    transactiontypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    transactionfeeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    transactiontype: {
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
    tableName: 'transactiontype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_transactiontype_transactionfeeid",
        fields: [
          { name: "transactionfeeid" },
        ]
      },
      {
        name: "pk_transactiontype",
        unique: true,
        fields: [
          { name: "transactiontypeid" },
        ]
      },
    ]
  });
  }
}
