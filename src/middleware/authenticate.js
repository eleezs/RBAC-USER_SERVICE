const jwt = require("jsonwebtoken");
const { client } = require("../config/redis");
require('dotenv');

exports.verifyJWTToken = (token) => {
	return new Promise((resolve) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (!err) {
				resolve(decoded);
			} else {
				resolve(false);
			}
		});
	});
};

exports.verifyToken = async (req, res, next) => {
	try {
		const token =
			req.headers.authorization ||
			req.headers["x-access-token"] ||
			req.query.token ||
			req.body.token
			;

		if (!token) {
			return response(res, false, 401, "A token is required to access this resource", { invalidSession: true });
		}

		const tokenVerified = verifyJWTToken(token)

		if (tokenVerified && tokenVerified.id) {
			let key_exist = await client.EXISTS(`customer_token_${tokenVerified.id}`) === 1;
			if (!key_exist) {
				return response(res, false, 401, "The token passed is either expired or invalid",
					{
						invalidSession: true
					}
				);
			}
			let key = await client.get(`customer_token_${tokenVerified.id}`)

			if (key !== token) {
				return response(res, false, 401, "The token passed is either expired or invalid",
					{
						invalidSession: true
					}
				);
			}

			req.token = tokenVerified;

			req.user = {
				...tokenVerified,
				id: tokenVerified.id
			};

			next();
		}

	} catch (e) {
		console.log(e)
		return response(res, false, 500, "There was an error while processing this request");
	}
}

exports.generateToken = (payload, expiresIn = '1h') => {
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
	return token;
};
