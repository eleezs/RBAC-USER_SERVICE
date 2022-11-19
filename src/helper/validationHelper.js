const { response } =  require('../helper/utilityHelper');
const Models = require('../models')

const checkAllowedFields = (payload, fields) => {
  payload = Array.isArray(payload) ? payload : [payload];

  payload.forEach((item) => {
    const allowed = Object.keys(item).every(field => fields.includes(field));
    fields = typeof fields === 'string' ? fields : fields.join(', ');

    if (!allowed) {
      throw new Error(`Wrong fields passed. Allowed fields: ${fields}`);
    }
  });

  return true;
};

const isPositiveNumber = (value) => {
  const math_sign = Math.sign(value)
  if (math_sign !== 1 && math_sign !== 0) {
    throw new Error("Value must be a positive number");
  }

  return true;
}

const isValidDate = (value) => {
  if (!value) return true;
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/g)) return false;
  return new Date(value);
}

const isValidPassword = (value) => {
  let regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/g
  if (value.match(regEx)) {
    return true;
  }
  return false;
}

const checkDuplicateEmail = async (email) => {
	const existingEmail = await Models.email.findOne({
		where: {
			email
		}
	})

	if (existingEmail) {
		throw new Error("This is email is already in use")
	}

	return true;
}

const checkDuplicatenumber = async (phone) => {
	const existingNumber = await Models.phonenumber.findOne({
		where: {
			phonenumber: phone
		}
	})

	if (existingNumber) {
		throw new Error("This is phone number is already in use")
	}

	return true;
}

const validateSecureAccountParameter = (body) => {
  const { recoveryQuestionId1, recoveryQuestionId2, recoveryQuestionId3, recoveryQuestionId4 } = body

  if(!recoveryQuestionId1 && !recoveryQuestionId2 && !recoveryQuestionId3 && !recoveryQuestionId4) {
    throw new Error('select a security question')
  }

  return true
}

const validateGetCity = (body) => {
	const { id, cityId } = body

	if (id && cityId) {
		throw new Error('Passs one parameter per time')
	}
	return true;
}

const validateGetState = (body) => {
	const { id, countryId } = body

	if (id && countryId) {
		throw new Error('Passs one parameter per time')
	}
	return true;
}

const validateGetCountry = (body) => {
	const { id, country, code } = body

	if (id && country || code && id || country && code) {
		throw new Error('Passs one parameter per time')
	}
	return true;
}

const validateGetPhonecode = (body) => {
	const { id, countryCode, countryId } = body

	if (id && countryId || countryCode && id || countryId && countryCode) {
		throw new Error('Passs one parameter per time')
	}
	return true;
}

module.exports = {
	checkAllowedFields,
	isPositiveNumber,
	isValidDate,
	isValidPassword,
	checkDuplicateEmail,
	checkDuplicatenumber,
	validateSecureAccountParameter,
	validateGetCity,
	validateGetState,
	validateGetCountry,
	validateGetPhonecode
}