const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messagedocument.init(sequelize, DataTypes);
}

class messagedocument extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messagedocumentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    messageid: {
      type: DataTypes.BIGINT,
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
    tableName: 'messagedocument',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_messagedocument_message",
        fields: [
          { name: "messageid" },
        ]
      },
      {
        name: "pk_messagedocument",
        unique: true,
        fields: [
          { name: "messagedocumentid" },
        ]
      },
    ]
  });
  }
}
