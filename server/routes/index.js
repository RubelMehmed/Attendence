const router = require('express').Router();
const authRoutes = require('./auth');
const usersRoutes = require('./user');
const adminAttendanceRoutes = require('./admin-attendance');
const studentAttendanceRoutes = require('./student-attendance');

const authenticate = require('../middleware/authenticate');


router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, usersRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoutes);
router.use('/api/v1/student/attendance', authenticate, studentAttendanceRoutes);


module.exports = router;

