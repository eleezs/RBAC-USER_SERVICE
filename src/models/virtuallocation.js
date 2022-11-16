const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return virtuallocation.init(sequelize, DataTypes);
}

class virtuallocation extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    virtuallocationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pitchsessionlocationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    areacode: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    meetingpin: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    countrycode: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    notes: {
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
    tableName: 'virtuallocation',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_virtuallocation_pitchsessionlocation",
        fields: [
          { name: "pitchsessionlocationid" },
        ]
      },
      {
        name: "pk_virtuallocation",
        unique: true,
        fields: [
          { name: "virtuallocationid" },
        ]
      },
    ]
  });
  }
}
