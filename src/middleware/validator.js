const { response } =  require('../helper/utilityHelper');
const { body, param, query, validationResult } = require('express-validator');
const { checkDuplicateEmail, checkDuplicatenumber, checkAllowedFields, isPositiveNumber, isValidDate, isValidPassword, validateGetCity, validateGetState, validateGetCountry, validateGetPhonecode, validateLoginParam } = require('../helper/validationHelper');

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
    .withMessage('This field can not be empty')
		.custom(checkDuplicateEmail),
  body("phone")
    .exists()
    .withMessage('This field is required')
    .isString()
    .withMessage('This field must be a string')
    .notEmpty()
    .withMessage('This field can not be empty')
		.custom(checkDuplicatenumber),
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

exports.update_user_bio = [
  param("id")
    .exists()
    .withMessage('Id is required')
    .isInt()
    .withMessage('Id field is an integer')
    .notEmpty()
    .withMessage('Id can not be empty')
    .custom(isPositiveNumber),
  body("dob")
    .exists()
    .withMessage('DOB is required')
    .isString()
    .withMessage('DOB should be a string')
    .notEmpty()
    .withMessage('DOB can not be empty')
		.isDate()
		.withMessage('Invalid date')
    .custom(isValidDate)
    .withMessage("DOB format should be: YYYY-MM-DD"),
  body("gender")
    .exists()
    .withMessage('Gender is required')
    .isString()
    .withMessage('Gender is an string')
    .isIn(['male', 'female', 'other'])
    .withMessage('Gender value should either be male, female, or other')
    .notEmpty()
    .withMessage('Gender can not be empty'),
  body("marital_status_id")
    .exists()
    .withMessage('Marital status id is required')
    .isInt()
    .withMessage('Marital status id is an integer')
    .notEmpty()
    .withMessage('Marital status id can not be empty')
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
    .custom(body => checkAllowedFields(body, ['dob', 'gender', 'marital_status_id', 'city'] )),
	param()
		.custom(param => checkAllowedFields(param, ['id']))
]

exports.admin_update_user_access = [
  body("user_id")
    .exists()
    .withMessage('user Id is required')
    .isInt()
    .withMessage('This is field is an integer')
    .notEmpty()
    .withMessage('user Id can not be empty')
    .custom(isPositiveNumber),
  body("user_type_id")
    .optional()
    .isInt()
    .withMessage('User type id must be an integer')
    .notEmpty()
    .withMessage('User type id can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['user_id', 'user_type_id']))
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
  param("user_id")
    .exists()
    .withMessage('User id is required')
    .isInt()
    .withMessage('User id field is an integer')
    .notEmpty()
    .withMessage('User id can not be empty')
    .custom(isPositiveNumber),
  body("password")
    .exists()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password is an string')
    .isLength({ min: 8 })
    .withMessage("Password should not be less than 8 character")
    .custom(isValidPassword)
    .withMessage('Password must contain at least one uppercase and lowercase letter, number and special character')
    .notEmpty()
    .withMessage('Password can not be empty'),
  body("recovery_question_id1")
    .exists()
		.withMessage("Recovery question id_1 is required")
    .isInt()
    .withMessage('Recovery question id_1 is an integer')
    .notEmpty()
    .withMessage('Recovery question id_1 can not be empty')
    .custom(isPositiveNumber),
  body("recovery_question_id2")
		.exists()
		.withMessage("Recovery question id_2 is required")
    .isInt()
    .withMessage('Recovery question id_2 is an integer')
    .notEmpty()
    .withMessage('Recovery question id_2 can not be empty')
    .custom(isPositiveNumber),
  body("recovery_question_id3")
		.exists()
		.withMessage("Recovery question id_3 is required")
    .isInt()
    .withMessage('Recovery question id_3 is an integer')
    .notEmpty()
    .withMessage('Recovery question id_3 can not be empty')
    .custom(isPositiveNumber),
  body("recovery_question_id4")
    .exists()
		.withMessage("Recovery question id_4 is required")
    .isInt()
    .withMessage('Recovery question id_4 is an integer')
    .notEmpty()
    .withMessage('Recovery question id_4 can not be empty')
    .custom(isPositiveNumber),
  body("recovery_answer1")
    .exists()
		.withMessage("Recovery answer_1 is required")
    .isString()
    .withMessage('Recovery answer_1 is an string')
    .notEmpty()
    .withMessage('Recovery answer_1 can not be empty'),
  body("recovery_answer2")
    .exists()
		.withMessage("Recovery answer_2 is required")
    .isString()
    .withMessage('Recovery answer_2 is an string')
    .notEmpty()
    .withMessage('Recovery answer_2 can not be empty'),
  body("recovery_answer3")
    .exists()
		.withMessage("Recovery answer_3 is required")
    .isString()
    .withMessage('Recovery answer_3 is an string')
    .notEmpty()
    .withMessage('Recovery answer_3 can not be empty'),
  body("recovery_answer4")
		.exists()
		.withMessage("Recovery answer_4 is required")	
    .isString()
    .withMessage('Recovery answer_4 is an string')
    .notEmpty()
    .withMessage('Recovery answer_4 can not be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['password', 'recovery_question_id1', 'recovery_question_id2', 'recovery_question_id3', 'recovery_question_id4', 'recovery_answer1', 'recovery_answer2', 'recovery_answer3', 'recovery_answer4'])),
	param()
		.custom(param => checkAllowedFields(param, 'user_id'))
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
    .custom(param => checkAllowedFields(param, ['id']))
]

exports.valid_id_body = [
  body("id")
		.exists()
		.withMessage('Id is required')
    .isInt()
    .withMessage('Id must be an integer')
    .notEmpty()
    .withMessage('Id can not be empty')
    .custom(isPositiveNumber),
  body()
    .custom(body => checkAllowedFields(body, ['id']))
]

exports.get_city = [
  body("id")
		.optional()
    .isInt()
    .withMessage('Id must be an integer')
    .notEmpty()
    .withMessage('Id can not be empty')
    .custom(isPositiveNumber),
	body("city_id")
		.optional()
    .isInt()
    .withMessage('city id must be an integer')
    .notEmpty()
    .withMessage('city id can not be empty')
    .custom(isPositiveNumber),
  body()
		.custom(validateGetCity)
    .custom(body => checkAllowedFields(body, ['id', 'city_id']))
]

exports.get_state = [
  body("id")
		.optional()
    .isInt()
    .withMessage('Id must be an integer')
    .notEmpty()
    .withMessage('Id can not be empty')
    .custom(isPositiveNumber),
	body("country_id")
		.optional()
    .isInt()
    .withMessage('Country id must be an integer')
    .notEmpty()
    .withMessage('Country id can not be empty')
    .custom(isPositiveNumber),
  body()
		.custom(validateGetState)
    .custom(body => checkAllowedFields(body, ['id', 'country_id']))
]

exports.get_country = [
	body("id")
		.optional()
		.isInt()
		.withMessage('Id must be an integer')
		.notEmpty()
		.withMessage('Id can not be empty')
		.custom(isPositiveNumber),
  body("country")
    .optional()
    .isString()
    .withMessage('Country must be an string')
    .notEmpty()
    .withMessage('Country can not be empty'),
	body("code")
    .optional()
    .isString()
    .withMessage('Code must be an string')
    .notEmpty()
    .withMessage('Code can not be empty'),
  body()
		.custom(validateGetCountry)
    .custom(body => checkAllowedFields(body, ['id', 'code', 'country']))
]

exports.get_Phone_Code = [
body("id")
	.optional()
	.isInt()
	.withMessage('Id must be an integer')
	.notEmpty()
	.withMessage('Id can not be empty')
	.custom(isPositiveNumber),
body("country_id")
	.optional()
	.isInt()
	.withMessage('Country id must be an Integer')
	.notEmpty()
	.withMessage('Country id can not be empty'),
body("countryCode")
	.optional()
	.isString()
	.withMessage('Country code must be an string')
	.notEmpty()
	.withMessage('Country code can not be empty'),
body()
.custom(validateGetPhonecode)
.custom(body => checkAllowedFields(body, ['id', 'countryCode', 'country_id']))
]

exports.create_role = [
  body("access_user_id")
    .exists()
    .withMessage('Access user id is required')
    .isInt()
    .withMessage('Access user id msut be an integer')
    .notEmpty()
    .withMessage('Access user id can be empty'),
  body("role_id")
    .exists()
    .withMessage('Role id is required')
    .isInt()
    .withMessage('Role id msut be an integer')
    .notEmpty()
    .withMessage('Role id can be empty'),
  body("is_active")
    .exists()
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  body("effective_date")
    .exists()
    .withMessage('Effective date is required')
    .isString()
    .withMessage('Effective date should be a string')
    .notEmpty()
    .withMessage('Effective date can not be empty')
    .custom(isValidDate)
    .withMessage("Effective date format should be: YYYY-MM-DD"),
  body("end_date")
    .exists()
    .withMessage('End date is required')
    .isString()
    .withMessage('End date should be a string')
    .notEmpty()
    .withMessage('End date can not be empty')
    .custom(isValidDate)
    .withMessage("End date format should be: YYYY-MM-DD"),
  body()
    .custom(body => checkAllowedFields(body, ['access_user_id', 'role_id', 'is_active', 'effective_date', 'end_date']))
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
    .optional()
    .isString()
    .withMessage("Email must be a string")
    .notEmpty()
    .withMessage("Email can not be empty"),
  body("password")
    .optional()
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Password can not be empty"),
	query("code")
		.optional()
		.isString()
    .withMessage("Code must be a string"),
	query()
		.custom(validateLoginParam)
  // body()
    // .custom(body => checkAllowedFields(body, ['email', 'password']))
]

exports.create_group_access = [
  body("group_name")
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
  body('effective_date')
    .exists()
    .withMessage('Effective Date is required')
    .isString()
    .withMessage('Effective date should be a string')
    .notEmpty()
    .withMessage('Effective Date can not be empty')
    .custom(isValidDate)
    .withMessage("Effective Date format should be: YYYY-MM-DD"),
  body('is_active')
    .exists()
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  body()
    .custom(body => checkAllowedFields(body, ['group_name', 'code', 'description', 'effective_date', 'is_active']))
]

exports.deactive_or_active_group_access = [
  param('access_group_id')
    .exists()
    .withMessage("Access group id is required")
    .isInt()
    .withMessage("Access group id must be a number")
    .notEmpty()
    .withMessage("Access group id can not be empty")
    .custom(isPositiveNumber),
  body("is_active")
    .exists()
    .withMessage('Is active is required')
    .isIn([true, false])
    .withMessage('Is active msut be a boolean')
    .notEmpty()
    .withMessage('Is active can be empty'),
  param()
    .custom(param => checkAllowedFields(param, ['access_group_id'])),
  body()
    .custom(body => checkAllowedFields(body, ['is_active']))
]

exports.add_members_to_group = [
  body('user_access_id')
    .exists()
    .withMessage("user Access Id is required")
    .isInt()
    .withMessage("user Access Id must be a number")
    .notEmpty()
    .withMessage("user Access Id can not be empty")
    .custom(isPositiveNumber),
  param('access_group_id')
    .exists()
    .withMessage("Access group id is required")
    .isInt()
    .withMessage("Access group id must be a number")
    .notEmpty()
    .withMessage("Access group id can not be empty")
    .custom(isPositiveNumber),
  param()
    .custom(param => checkAllowedFields(param, ['access_group_id'])),
  body()
    .custom(body => checkAllowedFields(body, ['user_access_id']))
]

exports.update_user_address = [
	body('address_type_id')
		.exists()
		.withMessage('Address type id is required')
		.isInt()
		.withMessage('Address type id is a integer')
		.notEmpty()
		.withMessage('Address type id can not be empty')
		.custom(isPositiveNumber),
	body('city_id')
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
		.custom(body => checkAllowedFields(body, ['address_type_id', 'city_id', 'addressline1', 'addressline2', 'streetnumber', 'buildingnumber', 'description']))
]