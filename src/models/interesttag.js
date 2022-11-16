const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return interesttag.init(sequelize, DataTypes);
}

class interesttag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    interesttagid: {
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
    tableName: 'interesttag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_interesttag",
        unique: true,
        fields: [
          { name: "interesttagid" },
        ]
      },
    ]
  });
  }
}
