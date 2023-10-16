const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const authRoutes = require('./authRoutes');
const usersRoutes = require('./userRoutes');

router.use('/api/v1/auth',  authRoutes);
router.use('/api/v1/users', authenticate , usersRoutes);

module.exports = router;

// const router = require('express').Router();

// const authRoutes = require('./authRoutes');
// const userRoutes = require('./userRoutes');

// // const authenticate = require('../middlewares/authenticate');
// const authenticate = require('../middleware/authenticate');

// router.use('/api/v1/auth', authRoutes);

// router.use('/api/v1/users', authenticate, userRoutes);

// module.exports = router;
