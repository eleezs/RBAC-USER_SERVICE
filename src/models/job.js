const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return job.init(sequelize, DataTypes);
}

class job extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    jobid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    isretired: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'job',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "pk_job",
        unique: true,
        fields: [
          { name: "jobid" },
        ]
      },
    ]
  });
  }
}
