const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitchsessionlocation', {
    pitchsessionlocationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionid: {
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
    tableName: 'pitchsessionlocation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessionlocation_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pitchsessionlocation_pkey",
        unique: true,
        fields: [
          { name: "pitchsessionlocationid" },
        ]
      },
      {
        name: "pk_pitchsessionlocation",
        unique: true,
        fields: [
          { name: "pitchsessionlocationid" },
        ]
      },
    ]
  });
};
