const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return messageflag.init(sequelize, DataTypes);
}

class messageflag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messageflagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reporterid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flagdispositionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    messageflag: {
      type: DataTypes.STRING(500),
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
    tableName: 'messageflag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_messageflag_accessuser",
        fields: [
          { name: "reporterid" },
        ]
      },
      {
        name: "idx_fk_messageflag_flagdisposition",
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "idx_fk_messageflag_message",
        fields: [
          { name: "messageid" },
        ]
      },
      {
        name: "pk_messageflag",
        unique: true,
        fields: [
          { name: "messageflagid" },
        ]
      },
    ]
  });
  }
}
