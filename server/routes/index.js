const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

const authenicate = require('../middlewares/authenticate');


router.use('/api/v1/auth', authRoutes);

router.use('/api/v1/users', authenicate, userRoutes);

module.exports = router;