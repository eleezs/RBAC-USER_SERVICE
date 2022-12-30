const jwt = require("jsonwebtoken");
const { response } = require("../helper/utilityHelper");
require('dotenv');
const Redis = require('../config/redis');
const client = Redis.redisClient();

const verifyJWTToken = (token) => {
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

const verifyToken = async (req, res, next) => {
	try {
		const token =
			req.headers.authorization ||
			req.headers["x-access-token"] ||
			req.query.token ||
			req.body.token
			;

		if (!token) {
			return response (res, false, 401, "A token is required to access this resource", { invalidSession: true });
		}

		const tokenVerified = await verifyJWTToken(token)

		if (tokenVerified && tokenVerified.id) {
			let key_exist = await client.EXISTS(`user_token_${tokenVerified.id}`) === 1;

			if (!key_exist) {
				return response(res, false, 401, "The token passed is either expired or invalid",
					{
						invalidSession: true
					}
				);
			}
			let key = await client.get(`user_token_${tokenVerified.id}`)

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
		} else {
			return response(res, false, 401, "The token passed is either expired or invalid",
					{
						invalidSession: true
					}
				);
		}

	} catch (e) {
		console.log(e)
		return response(res, false, 500, "There was an error while processing this request");
	}
}

const generateToken = (payload, expiresIn = '6h') => {
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
	return token;
};

module.exports = {
	verifyJWTToken,
	verifyToken,
	generateToken
};