const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchtag.init(sequelize, DataTypes);
}

class pitchtag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchtagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(50),
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
    tableName: 'pitchtag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_pitchtag",
        unique: true,
        fields: [
          { name: "pitchtagid" },
        ]
      },
    ]
  });
  }
}
