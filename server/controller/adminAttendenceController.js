const AdminAttendance = require('../models/AdminAttendance');

const getEnable = async (req, res, next) =>{
    try {
        const running = await AdminAttendance.findOne({status: 'RUNNING'});
        if (running){
            throw error('Already Running', 400)
        }

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

const getStatus = async (req, res, next) =>{
    try {
        const running = await AdminAttendance.findOne({status: 'RUNNING'});
        if (!running){
            throw error('Not Running', 400)
        }
        return res.status(200).jsopn(running)
    } catch (e) {
        next(e)
    }
};



module.exports = {
    getEnable,
    getDisable,
    getStatus,
}