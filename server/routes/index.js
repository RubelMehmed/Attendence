const router = require('express').Router();
const authRoutes = require('./authRoutes');
const usersRoutes = require('./userRoutes');
const adminAttendanceRoute = require('./adminAttendanceRoutes');
const authenticate = require('../middleware/authenticate');


router.use('/api/v1/auth',  authRoutes);
router.use('/api/v1/users', authenticate , usersRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoute);

module.exports = router;

