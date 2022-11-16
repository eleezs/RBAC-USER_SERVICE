const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return pitchsessionparticipant.init(sequelize, DataTypes);
}

class pitchsessionparticipant extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pitchsessionparticipantid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pitchsessionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    accesscode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invitesent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    acceptedinvite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    declinedinvite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    declinereason: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    attendedvirtualsession: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    attendedphysicalsession: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    tableName: 'pitchsessionparticipant',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_pitchsessionparticipant_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_pitchsessionparticipant_pitchsession",
        fields: [
          { name: "pitchsessionid" },
        ]
      },
      {
        name: "pk_pitchsessionparticipant_pitchsessionparticipantid",
        unique: true,
        fields: [
          { name: "pitchsessionparticipantid" },
        ]
      },
    ]
  });
  }
}
