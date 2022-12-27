const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectfundswithdrawalvote', {
    projectfundswithdrawalvoteid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    projectfundswithdrawalid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    voteyes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    voteno: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    voteblock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stake: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    withdrawalcomment: {
      type: DataTypes.STRING(1000),
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
    tableName: 'projectfundswithdrawalvote',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_fk_projectfundswithdrawalvote_projectfundswithdrawal",
        fields: [
          { name: "projectfundswithdrawalid" },
        ]
      },
      {
        name: "pk_projectfundswithdrawalvote",
        unique: true,
        fields: [
          { name: "projectfundswithdrawalvoteid" },
        ]
      },
      {
        name: "projectfundswithdrawalvote_pkey",
        unique: true,
        fields: [
          { name: "projectfundswithdrawalvoteid" },
        ]
      },
    ]
  });
};
