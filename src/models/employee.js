const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return employee.init(sequelize, DataTypes);
}

class employee extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    employeeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
			autoIncrement: true,
      primaryKey: true
    },
    accessuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    managerid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jobid: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isactive: {
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
    tableName: 'employee',
    schema: 'app',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_employee_accessuser",
        fields: [
          { name: "accessuserid" },
        ]
      },
      {
        name: "idx_fk_employee_employee",
        fields: [
          { name: "managerid" },
        ]
      },
      {
        name: "idx_fk_employee_job",
        fields: [
          { name: "jobid" },
        ]
      },
      {
        name: "pk_employee",
        unique: true,
        fields: [
          { name: "employeeid" },
        ]
      },
    ]
  });
  }
}
