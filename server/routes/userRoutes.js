// const express = require('express')
// const router = express.Router()
const router = require('express').Router();

const userController = require('../controller/userController');



/** 
 * -- filter
 * --pagination
 * --sorting
 * --select properties
 * @route /api/v1/users?sort=["by", "name"]
 * @method Get
 * @visibilty Private
 */

/**
 * get user by id or email
 * @route /api/v1/users/:userId or /api/v1/users?email="email"
 */


router.get('/:userId', userController.getUserById);





/**
 * Update user by Id
 * @method PUT
 * @route /api/v1/users/:userId
 */
router.put('/:userId', () => {});


/**
 * Update user by Id
 * @method PATCH
 * @route /api/v1/users/:userId
 */

router.patch('/:userId', () => {})

/** 
 * Delete user by User
 * @method DELETE
 * @route /api/v1/users/:userId
 */
router.delete('/:userId', userController.deleteUserById);

/**
 * Get users
 * @method GET
 * @route /api/v1/users
 */

router.get('/', userController.getUsers)

/**
 * create a user
 */
router.post('/',userController.getUsers)


module.exports = {
    router
};