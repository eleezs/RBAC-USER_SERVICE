const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return dispositionaction.init(sequelize, DataTypes);
}

class dispositionaction extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    dispositionactionid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    dispositiontypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    dispositionaction: {
      type: DataTypes.STRING(50),
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
    tableName: 'dispositionaction',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_dispositionaction_dispositiontype",
        fields: [
          { name: "dispositiontypeid" },
        ]
      },
      {
        name: "pk_dispositionaction",
        unique: true,
        fields: [
          { name: "dispositionactionid" },
        ]
      },
    ]
  });
  }
}
