const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flagdisposition', {
    flagdispositionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dispositiontypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    flagdisposition: {
      type: DataTypes.STRING(5000),
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
    tableName: 'flagdisposition',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "flagdisposition_pkey",
        unique: true,
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "idx_fk_flagdisposition_dispositiontype",
        fields: [
          { name: "dispositiontypeid" },
        ]
      },
      {
        name: "idx_fk_flagdisposition_employee",
        fields: [
          { name: "reviewerid" },
        ]
      },
      {
        name: "pk_flagdisposition",
        unique: true,
        fields: [
          { name: "flagdispositionid" },
        ]
      },
    ]
  });
};
