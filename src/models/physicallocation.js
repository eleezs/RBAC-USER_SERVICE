const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return physicallocation.init(sequelize, DataTypes);
}

class physicallocation extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    physicallocationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionlocationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    addressid: {
      type: DataTypes.BIGINT,
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
    tableName: 'physicallocation',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_physicallocation_address",
        fields: [
          { name: "addressid" },
        ]
      },
      {
        name: "idx_fk_physicallocation_pitchsessionlocation",
        fields: [
          { name: "pitchsessionlocationid" },
        ]
      },
      {
        name: "pk_physicallocation",
        unique: true,
        fields: [
          { name: "physicallocationid" },
        ]
      },
    ]
  });
  }
}
