const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return assessmentflag.init(sequelize, DataTypes);
}

class assessmentflag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    assessmentflagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assessmentid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reporterid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flagdispositionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assessmentflagcomment: {
      type: DataTypes.STRING(500),
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
    tableName: 'assessmentflag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_assessmentflag_accessuser",
        fields: [
          { name: "reporterid" },
        ]
      },
      {
        name: "idx_fk_assessmentflag_assessment",
        fields: [
          { name: "assessmentid" },
        ]
      },
      {
        name: "idx_fk_assessmentflag_flagdisposition",
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "pk_assessmentflag",
        unique: true,
        fields: [
          { name: "assessmentflagid" },
        ]
      },
    ]
  });
  }
}
