const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return dispositiontype.init(sequelize, DataTypes);
}

class dispositiontype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    dispositiontypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    dispositiontype: {
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
    tableName: 'dispositiontype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_dispositiontype",
        unique: true,
        fields: [
          { name: "dispositiontypeid" },
        ]
      },
    ]
  });
  }
}
