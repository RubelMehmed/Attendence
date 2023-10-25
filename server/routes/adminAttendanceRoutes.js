const router = require('express').Router();
const {getDisable, getEnable} = require('../controller/adminAttendenceController');

router.get('/enable', getEnable);
router.get('/disable', getDisable);



module.exports = router;