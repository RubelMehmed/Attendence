const router = require('express').Router();
// impoer authRoutes
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// const authenticate = require('../middlewares/authenticate');
const authenticate = require('../middlewares/authenticate');

router.use('/api/v1/auth', authRoutes);

router.use('/api/v1/users', authenticate, userRoutes);

module.exports = router;