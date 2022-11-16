const Models = require("../models");

require('dotenv');
const { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID } = process.env;

exports.getGoogleAuthURL = () => {
	const root_url  = "https://accounts.google.com/o/oauth2/v2/auth";
	const options = {

		ClientID: process.env.GOOGLE_CLIENT_ID,
		ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
		access_type: "offline",
    	response_type: "code",
		callbackUrl: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback   : true,
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		].join(" "),

		  return `${root_url}?${querystring.stringify(options)}`;
	}, 
}	
	
exports.getTkens({
	code,
  clientId,
  clientSecret,
  redirectUri,
}	:  {
	code: string;
	clientId: string;
	clientSecret: string;
	redirectUri: string;
  }): Promise<{
	access_token: string;
	expires_in: Number;
	refresh_token: string;
	scope: string;
	id_token: string;
  }> {
})
	
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


const redirectURI = "auth/google";

function getGoogleAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: pr,
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  return `${rootUrl}?${querystring.stringify(options)}`;
}

// Getting login URL
app.get("/auth/google/url", (req, res) => {
  return res.send(getGoogleAuthURL());
});

function getTokens({
  code,
  clientId,
  clientSecret,
  redirectUri,
}: {
  code: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}): Promise<{
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  id_token: string;
}> {
  /*
   * Uses the code to get tokens
   * that can be used to fetch the user's profile
   */
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  return axios
    .post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}

// Getting the user from Google with the code
app.get(`/${redirectURI}`, async (req, res) => {
  const code = req.query.code as string;

  const { id_token, access_token } = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `${SERVER_ROOT_URI}/${redirectURI}`,
  });

  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  const token = jwt.sign(googleUser, JWT_SECRET);

  res.cookie(COOKIE_NAME, token, {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
  });

  res.redirect(UI_ROOT_URI);
});

// Getting the current user
app.get("/auth/me", (req, res) => {
  console.log("get me");
  try {
    const decoded = jwt.verify(req.cookies[COOKIE_NAME], JWT_SECRET);
    console.log("decoded", decoded);
    return res.send(decoded);
  } catch (err) {
    console.log(err);
    res.send(null);
  }
});

function main() {
  app.listen(port, () => {
    console.log(`App listening http://localhost:${port}`);
  });
}

main();