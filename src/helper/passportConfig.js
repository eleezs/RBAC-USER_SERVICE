const googleStrategy = require('passport-google-oauth20');
const { Models, Person, Email } = require("../models");

require('dotenv');

module.exports = (passport) => {
	passport.use(new googleStrategy({
		ClientID: process.env.GOOGLE_CLIENT_ID,
		ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackUrl: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback   : true
	}, 
	async (accessToken, refreshToken, profile, done) => {
			console.log(profile.emails),
			console.log(profile, 'profile')
			console.log(profile.emails[0].value)

			const t = await sequelize.transaction ();
			try {
				//check if email exist
				const userExist = await Email.findOne({ email: profile.emails[0].value }, { transaction: t })

				if (userExist) {
					return done(null, userExist)
				} else {
					//creaate user
					console.log('Creating new user...');
					const person = await Person.create({
						firstName: profile.displayName
					}, { transaction: t })
					
					const userEmail = await Email.create({ email:profile.emails[0].value, created_by: profile.displayName }, { transaction: t });

					await t.commit();
					person.dataValues.email = userEmail.dataValues.email;
					return done(null, person)
				}
			} catch (e) {
				await t.rollback();
                console.log(e);
				return done(error, false)
			}
		}
	))
}