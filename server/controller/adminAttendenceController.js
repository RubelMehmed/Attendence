const AdminAttendance = require('../models/AdminAttendance');

const getEnable = async (req, res, next) =>{
    try {
        const attendance = new AdminAttendance({});
        await attendance.save();
        res.status(200).json({
            success: true,
            message: 'Attendance is enabled',
            attendance,
        });
    } catch (e) {
        next(e);
    }
};
const getDisable = (req, res, next) =>{};



module.exports = {
    getEnable,
    getDisable,
}