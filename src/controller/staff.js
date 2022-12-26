const { response, getUserById } = require("../helper/utilityHelper");
const { sequelize } = require("../models");
const Models = require("../models");

exports.createRole = async (req, res) => {
  const t = Models.sequelize.transaction();
  const { role, description } = req.body
  try {
    await Models.roletype.create({
      roletype: role,
      description,
      created_by: `${req.user.id}`
    }, { transaction: t })

    await t.commit();
    return response(res, true, 200, 'Role created');
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error Occured!')
  }
}

exports.assignRole = async (req, res) => {
  const t = Models.sequelize.transaction();
  const { accessUserId, roleId, isActive, effectiveDate, endDate } = req.body;

  try {
    await Models.userrole.create({
      accessuserid: accessUserId,
      roleid: roleId,
      isactive: isActive,
      effectivedate: effectiveDate,
      enddate: endDate
    }, { transaction: t })

    await t.commit();
    return response(res, true, 200, 'Role assigned to user successfully')
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error Occured!')
  }
}

//create user Access
exports.updateUserAccess = async (req, res) => {
  const { userId, userTypeId, username } = req.body;

  const t = await Models.sequelize.transaction();

  try {
    const user = await getUserById(userId)
    const admin = await getUserById(req.user.id)
    const userAccess = await Models.accessuser.create({
      personid: userId,
      usertypeid: userTypeId,
      username,
      updated_by: `${admin.firstname} ${admin.lastname}`
    }, { transaction: t })

    return response(res, true, 201, 'User access created', userAccess)
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error occurred');
  }
}

// creaate access group
exports.createGroupAccess = async (req, res) => {
  const { groupName, code, description, effectiveDate, isActive } = req.body;

  const t = await Models.sequelize.transaction();

  try {
    const admin = await getUserById(req.user.id)
    const accessGroup = await Models.accessgroup.create({
      groupname: groupName,
      code,
      description,
      effectivedate: effectiveDate,
      isactive: isActive,
      createdby: `${admin?.firstname} ${admin?.lastname}`
    }, { transaction: t })

    await t.commit();

    return response(res, true, 201, 'User access created', accessGroup)
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error occurred');
  }
}

//deactive or activate access group
exports.deactiveOrActiveGroupAccess = async (req, res) => {
  const { isActive } = req.body
  const { accessGroupId } = req.params
  const t = await Models.sequelize.transaction ();

  try {
    const user = await getUserById(req.user.id)
    const group = await Models.accessgroup.findOne({
      where: { accessgroupid: accessGroupId }
    }, { transaction: t })

    if (!group) {
      return response(res, false, 400, `Access group with id: ${accessGroupId} not found!`)
    }

    await group.update({
      isactive: isActive,
      updatedby: `${user?.firstname} ${user?.lastname}`
    }, { transaction: t })

    return response(res, true, 200, 'Access group status updated!')
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'Error occurred');
  }
}

//admin add members to group
exports.addMembersToGroup = async(req, res) => {
  const { userAccessId, accessGroupId } = req.body

  const t = await Models.sequelize.transaction();

  try {
    const validAccessUser = await Models.accessuser.findOne({
      where: { accessuserid: userAccessId }
    }, { transaction: t })

    const validAccessGroup = await Models.accessgroup.findOne({
      where: { 
        accessgroupid: accessGroupId,
        isactive: true
      }
    }, { transaction: t })

    if (!validAccessUser || !validAccessGroup) {
      return response(res, false, 400, 'No user with this user access id or invalid group id')
    }
    const user = getUserById(req.user.id)
    const memberGroup = await Models.groupmember.create({
      accessuserid: userAccessId,
      accessgroupid: accessGroupId,
      createdby: `${user?.firstname} ${user?.lastname}`
    }, { transaction: t })

    await t.commit();

    return response(res, true, 200,'User added to access group sucessfully!', memberGroup)
  } catch (e) {
    await t.rollback();
    console.log(e);
    return response(res, false, 500, 'An Error occurred');
  }
}

//create resources
exports.createResources = async (req, res) => {
	const { resource, code, description } = req.body

	const t = await Models.sequelize.transaction();

	try {
		const isDuplicateResource = await Models.resource.findOne({
			where: {
				resource
			}
		}, { transaction: t })

		if(isDuplicateResource) {
			return response(res, false, 400, ' This resource has been created')
		}

		const theResource = await Models.resource.create({
			resource,
			code,
			description
		}, { transaction: t })

		await t.commit();

		return response(res, true, 200, 'Resource created', theResource )
	} catch (e) {
		await t.rollback();
    console.log(e);
    return response(res, false, 500, 'An Error occurred');
	}
}

//resource authorization
exports.authorizeResource = async(req, res) => {
	const { authorizationtypeid, resourcesid, accesstoken, authorizationexpires } = req.body;

	const t = await Models.sequelize.transaction();

	try {
		const isDuplicateResource = await Models.resource.findOne({
			where: {
				resource
			},
			include: [{ model: Models.resourceauthorization, required: false }]
		}, { transaction: t })

		if(isDuplicateResource || isDuplicateResource.resourceauthorization) {
			return response(res, false, 400, ' This resource has been created or This resource has been authorized')
		}

		const resource = await Models.resourceauthorization.create({
			authorizationtypeid,
			resourcesid,
			accesstoken,
			authorizationexpires
		}, { transaction: t })

		await t.commit();

		return response(res, true, 200, 'Resource authorize', resource)
	} catch (e) {
		await t.rollback();
    console.log(e);
    return response(res, false, 500, 'An Error occurred');
	}
}


//search by name

//create employee