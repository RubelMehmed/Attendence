const User = require('../models/User');
const Error = require('../utils/error');
const userService = require('../service/userService');
const authServie = require('../service/authService');

// const asyncHandler = require('../middleware/asyncHandler')
// const ErrorResponse = require('../utils/errorResponse')

const getUsers = async (req, res, next) =>{
    /**
     * filter, sorting, pagination, selet as Todo
     */

    try { 
        const users = await userService.findUsers();
    } catch (e) {
        next(e);
    }
};

const getUserById = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const user = await userService.findUsersByProperty('_id', userId);
        
        if (!user) {
            throw error('user not found', 404);
            //todo update security state

            // return next(new ErrorResponse('User not found', 404));
        }else{
            return res.status(200).json({ success: true, data: user });
        }
    } catch (error) {
        next(error);
    }
};


const postUser = async (req, res, next) => {
    const { name, email, password, roles, accountStatus} = req.body;
try {
    const user = await authServie.registerService({
        name, email, password, roles, accountStatus,
    });
    return res.status(201).json(user);
} catch (e) {
    next(e);
}
};

const putUserById = (req, res, next) => {};

const patchUserById = (req, res, next) => {};

const deleteUserById = (req, res, next) => {};

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById
}