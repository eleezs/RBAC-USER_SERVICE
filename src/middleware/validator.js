const { response } =  require('../helper/utilityHelper');

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
  body("country")
    .exists()
    .withMessage('Country is required')
    .isInt()
    .withMessage('Country is an integer')
    .notEmpty()
    .withMessage('Country can not be empty')
    .custom(isPositiveNumber),
  body("state")
    .exists()
    .withMessage('State is required')
    .isInt()
    .withMessage('State is an integer')
    .notEmpty()
    .withMessage('State can not be empty')
    .custom(isPositiveNumber),
  body("city")
    .exists()
    .withMessage('City is required')
    .isInt()
    .withMessage('City is an integer')
    .notEmpty()
    .withMessage('City can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['userId', 'dob', 'gender', 'maritalStatusId', 'countryId', 'stateId', 'cityId'] ))
]

exports.admin_update_user_access = [
  body("userId")
    .exists()
    .withMessage('user Id is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('user Id can not be empty')
    .custom(isPositiveNumber),
  body("userTypeId")
    .optional()
    .isInt()
    .withMessage('userTypeId must be an integer')
    .notEmpty()
    .withMessage('userTypeId can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['userId', 'userTypeId']))
]

exports.update_user_access = [
  body("username")
    .optional()
    .isString()
    .withMessage('username must be a string')
    .notEmpty()
    .withMessage('username can not be empty'),
  body()
    .custom(body => checkAllowedFields(body, [ 'username']))
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
    .isLength({ min: 8 })
    .withMessage("Password should not be less than 8 character")
    .custom(isValidPassword)
    .withMessage('Password must contain at least one uppercase letter and lowercase letter')
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
  param("id")
    .exists()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer')
    .notEmpty()
    .withMessage('Id can not be empty')
    .custom(isPositiveNumber),
  param()
    .custom(params => checkAllowedFields(params, ['id']))
]

exports.country = [
  body("country")
    .exists()
    .withMessage('Country is required')
    .isString()
    .withMessage('Country must be an string')
    .notEmpty()
    .withMessage('Country can not be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['country']))
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
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  body("effectiveDate")
    .exists()
    .withMessage('effective Date is required')
    .isString()
    .withMessage('Start date should be a string')
    .notEmpty()
    .withMessage('effective Date can not be empty')
    .custom(isValidDate)
    .withMessage("effective Date format should be: YYYY-MM-DD"),
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
    .withMessage('Role is required')
    .isString()
    .withMessage('Role msut be a string')
    .notEmpty()
    .withMessage('Role can be empty'),
  body("description")
    .exists()
    .withMessage('Role is required')
    .isInt()
    .withMessage('Role msut be a string')
    .notEmpty()
    .withMessage('Role can be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['role', 'description']))
]

exports.login_parameters = [
  body("email")
    .exists()
    .withMessage("Email is required")
    .isString()
    .withMessage("Email must be a string")
    .notEmpty()
    .withMessage("Email can not be empty"),
  body("password")
    .exists()
    .withMessage("This field is required")
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Password can not be empty"),
  body()
    .custom(body => checkAllowedFields(body, ['email', 'password']))
]

exports.create_group_access = [
  body("groupName")
    .exists()
    .withMessage("Group name is required")
    .isString()
    .withMessage("Group name must be a string")
    .notEmpty()
    .withMessage("Group name can not be empty"),
  body('code')
    .exists()
    .withMessage("Code is required")
    .withMessage("Code is required")
    .isString()
    .withMessage("Code must be a string")
    .notEmpty()
    .withMessage("Code can not be empty"),    
  body('description')
    .exists()
    .withMessage("Descriptionis required")
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description can not be empty"),
  body('effectiveDate')
    .exists()
    .withMessage('effective Date is required')
    .isString()
    .withMessage('Start date should be a string')
    .notEmpty()
    .withMessage('effective Date can not be empty')
    .custom(isValidDate)
    .withMessage("effective Date format should be: YYYY-MM-DD"),
  body('isActive')
    .exists()
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['groupName', 'code', 'description', 'effectiveDate', 'isActive']))
]

exports.deactive_or_active_group_access = [
  param('accessGroupId')
    .exists()
    .withMessage("Access group id is required")
    .isInt()
    .withMessage("Access group id must be a number")
    .notEmpty()
    .withMessage("Access group id can not be empty")
    .custom(isPositiveNumber),
  body("isActive")
    .exists()
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  param()
    .custom(param => checkAllowedFields(param, ['accessGroupId'])),
  body()
    .custom(body => checkAllowedFields(body, ['isActive']))
]

exports.add_members_to_group = [
  body('userAccessId')
    .exists()
    .withMessage("user Access Id is required")
    .isInt()
    .withMessage("user Access Id must be a number")
    .notEmpty()
    .withMessage("user Access Id can not be empty")
    .custom(isPositiveNumber),
  param('accessGroupId')
    .exists()
    .withMessage("Access group id is required")
    .isInt()
    .withMessage("Access group id must be a number")
    .notEmpty()
    .withMessage("Access group id can not be empty")
    .custom(isPositiveNumber),
  param()
    .custom(param => checkAllowedFields(param, ['accessGroupId'])),
  body()
    .custom(body => checkAllowedFields(body, ['userAccessId']))
]

exports.update_user_address = [
	body('addresstypeid')
		.exists()
		.withMessage('Address type id is required')
		.isInt()
		.withMessage('Address type id is a integer')
		.notEmpty()
		.withMessage('Address type id can not be empty')
		.custom(isPositiveNumber),
	body('cityid')
		.exists()
		.withMessage('City id is required')
		.isInt()
		.withMessage('City id is a integer')
		.notEmpty()
		.withMessage('City id can not be empty')
		.custom(isPositiveNumber),
	body('addressline1')
		.optional()
		.isString()
		.withMessage('Address line 1 must be a string')
		.notEmpty()
		.withMessage('Address line 1 can not be empty'),
	body('addressline2')
		.optional()
		.isString()
		.withMessage('Address line 2 must be a string')
		.notEmpty()
		.withMessage('Address line 2 can not be empty'),
	body('streetnumber')
		.optional()
		.isString()
		.withMessage('Street number must be a string')
		.notEmpty()
		.withMessage('Street number can not be empty'),
	body('buildingnumber')
		.optional()
		.isString()
		.withMessage('Building number must be a string')
		.notEmpty()
		.withMessage('Building number can not be empty'),
	body('description')
		.optional()
		.isString()
		.withMessage('Description must be a string')
		.notEmpty()
		.withMessage('Description can not be empty'),
	body()
		.custom(body => checkAllowedFields(body, ['addresstypeid', 'cityid', 'addressline1', 'addressline2', 'streetnumber', 'buildingnumber', 'description']))
]