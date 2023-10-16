const User = require('../models/User');


const findUsers = () => {
	return User.find()
}

const findUserByProperty = (key, value) => {
	if (key === '_id') {
		return User.findById(value);
	}
	return User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password }) => {
	const user = new User({ name, email, password, roles: roles ? roles : ['STUDENT'],accountStatus: accountStatus ? accountStatus : 'PENDING' });
	return user.save();
};

/**
 * @sudocode for the delete operation
 * UserId = input()
 * UserName = input()
 * UserEmail = input()
 * UserRoles = input()
 * UserAccountStatus = input()
 * user = find user by userId
 * if user not found throw error
 * else delete the user form DB
 * return the response
 * @param {Object} user
 * @return {Object}
 * @api private
 *  
 */


const updateUser = async(id, data) => {
	const user = await findUserByProperty('email', data.email);

	if (user) {
		throw new Error('User already exists');
	}

	return User.findByIdAndUpdate(id, data, { new: true });
}

module.exports = {
	findUsers,
	findUserByProperty,
	createNewUser,
	updateUser,
};  