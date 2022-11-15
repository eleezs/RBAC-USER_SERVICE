const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class email extends Model {

        static associations(models) {
            //define association here
            email.belongsTo(models.person, {
                foreignKey: person_id
            })
        }
    };

	const Email = sequelize.define("email", {
		email_id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.BIGINT,
			defaultValue: DataTypes.BIGINT,
		},
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		person_id: {
			type: DataTypes.BIGINT,
		},
		created_by: {
			type: DataTypes.STRING
		},
		updated_by: {
			type: DataTypes.STRING
		}
	})
	return Email;
};