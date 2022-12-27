const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('physicallocation', {
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
    schema: 'public',
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
        name: "physicallocation_pkey",
        unique: true,
        fields: [
          { name: "physicallocationid" },
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
};
