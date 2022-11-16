const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return flagdisposition.init(sequelize, DataTypes);
}

class flagdisposition extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    schema: 'app',
    timestamps: false,
    indexes: [
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
  }
}
