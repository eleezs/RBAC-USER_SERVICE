const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return intellectualtype.init(sequelize, DataTypes);
}

class intellectualtype extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    intellectualtypeid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    intellectualtype: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
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
    tableName: 'intellectualtype',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_intellectualtype",
        unique: true,
        fields: [
          { name: "intellectualtypeid" },
        ]
      },
    ]
  });
  }
}
