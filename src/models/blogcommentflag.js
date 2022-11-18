const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return blogcommentflag.init(sequelize, DataTypes);
}

class blogcommentflag extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    blogcommentflagid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blogcommentid: {
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
    blogcommentflag: {
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
    tableName: 'blogcommentflag',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_blogcommentflag_accessuser",
        fields: [
          { name: "reporterid" },
        ]
      },
      {
        name: "idx_fk_blogcommentflag_blogcomment",
        fields: [
          { name: "blogcommentid" },
        ]
      },
      {
        name: "idx_fk_blogcommentflag_flagdisposition",
        fields: [
          { name: "flagdispositionid" },
        ]
      },
      {
        name: "pk_blogcommentflag",
        unique: true,
        fields: [
          { name: "blogcommentflagid" },
        ]
      },
    ]
  });
  }
}
