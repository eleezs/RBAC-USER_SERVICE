import { response } from '../helper/utilityHelper';

const { body, param, query, validationResult } = require('express-validator');

exports.validate = (values = []) => {
    return async (req, res, next) => {
      await Promise.all(values.map((value) => value.run(req)));
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
      let _errors = errors.array();
      let message = "Invalid parameters:";
  
      _errors.forEach((v) => {
        message += ` ${v.param},`;
      });
  
      response(res, false, 400, { errors: errors.array() });
    };
};

exports.checkAllowedFields = (payload, fields) => {
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

exports.isPositiveNumber = (value) => {
  const math_sign = Math.sign(value)
  if (math_sign !== 1 && math_sign !== 0) {
    throw new Error("Value must be a positive number");
  }

  return true;
}

exports.isValidDate = (value) => {
  if (!value) return true;
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/g)) return false;
  return new Date(value);
}

const validateSecureAccountParameter = (body) => {
  const { recoveryQuestionId1, recoveryQuestionId2, recoveryQuestionId3, recoveryQuestionId4 } = body

  if(!recoveryQuestionId1 && !recoveryQuestionId2 && !recoveryQuestionId3 && !recoveryQuestionId4) {
    throw new Error('select a security question')
  }

  return true
}

exports.create_user = [
  body("firstName")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("lastName")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("email")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("phone")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("phoneCodeId")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['firstName', 'lastName', 'email', 'phone', 'phoneCodeId']))
];

exports.update_user_bio = [
  body("userId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("dob")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('Start date should be a string')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isValidDate)
    .withMessage("This field format should be: YYYY-MM-DD"),
  body("gender")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This is field is an string')
    .isIn(['male', 'female', 'other'])
    .withMessage('This field value should either be male, female, other')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("maritalStatusId")
    .exists()
    .withMessage('This is field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("countryId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("stateId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("cityId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['userId', 'dob', 'gender', 'maritalStatusId', 'countryId', 'stateId', 'cityId'] ))
]

exports.create_user_access = [
  body("userId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("userTypeId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['userId', 'userTypeId']))
]

exports.secure_user_account = [
  body("userId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("password")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This is field is an string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("recoveryQuestionId1")
    .optional({ nullable: true })
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("recoveryQuestionId2")
    .optional({ nullable: true })
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("recoveryQuestionId3")
    .optional({ nullable: true })
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("recoveryQuestionId4")
    .optional({ nullable: true })
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  body("recoveryAnswer1")
    .optional({ nullable: true })
    .isString()
    .withMessage('This is field is an string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("recoveryAnswer2")
    .optional({ nullable: true })
    .isString()
    .withMessage('This is field is an string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("recoveryAnswer3")
    .optional({ nullable: true })
    .isString()
    .withMessage('This is field is an string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body("recoveryAnswer4")
    .optional({ nullable: true })
    .isString()
    .withMessage('This is field is an string')
    .notEmpty()
    .withMessage('This field can not be empty'),
  body()
    .custom(validateSecureAccountParameter)
    .custom(body => checkAllowedFields(body, ['userId', 'password', 'recoveryQuestionId1', 'recoveryQuestionId2', 'recoveryQuestionId3', 'recoveryQuestionId4', 'recoveryAnswer1', 'recoveryAnswer2', 'recoveryAnswer3', 'recoveryAnswer4']))
]

exports.valid_id_param = [
  params("id")
    .exists()
    .withMessage('This is field is required')
    .isInt()
    .withMessage('This field must be an integer')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isPositiveNumber),
  params()
    .custom(params => checkAllowedFields(params, ['id']))
]

exports.create_role = [
  body("accessUserId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This field msut be an integer')
    .notEmpty()
    .withMessage('This field can be empty'),
  body("roleId")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This field msut be an integer')
    .notEmpty()
    .withMessage('This field can be empty'),
  body("isActive")
    .exists()
    .withMessage('This field is required')
    .isIn([true, false])
    .withMessage('This field msut be a boolean')
    .notEmpty()
    .withMessage('This field can be empty'),
  body("effectiveDate")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('Start date should be a string')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isValidDate)
    .withMessage("This field format should be: YYYY-MM-DD"),
  body("endDate")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('Start date should be a string')
    .notEmpty()
    .withMessage('This field can not be empty')
    .custom(isValidDate)
    .withMessage("This field format should be: YYYY-MM-DD"),
  body()
    .custom(body => checkAllowedFields(body, ['accessUserId', 'roleId', 'isActive', 'effectiveDate', 'endDate']))
]

exports.assign_role = [
  body("role")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field msut be a string')
    .notEmpty()
    .withMessage('This field can be empty'),
  body("description")
    .exists()
    .withMessage('This field is required')
    .isInt()
    .withMessage('This field msut be a string')
    .notEmpty()
    .withMessage('This field can be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['role', 'description']))
]