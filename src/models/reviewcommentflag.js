const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return reviewcommentflag.init(sequelize, DataTypes);
}

class reviewcommentflag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reviewcommentlikeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reviewcommentid: {
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
    reviewcommentflagcomment: {
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
    tableName: 'reviewcommentflag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_reviewcommentflag_accessuser",
        fields: [
          { name: "reporterid" },
        ]
      },
      {
        name: "idx_fk_reviewcommentflag_flagdisposition",
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "idx_fk_reviewcommentflag_reviewcomment",
        fields: [
          { name: "reviewcommentid" },
        ]
      },
      {
        name: "pk_reviewcommentflag",
        unique: true,
        fields: [
          { name: "reviewcommentlikeid" },
        ]
      },
    ]
  });
  }
}
