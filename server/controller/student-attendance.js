const { addMinutes, isAfter } = require('date-fns')

const AdminAttendance = require('../models/AdminAttendance');
const StudentAttedance = require('../models/StudentAttendance');

const error = require('../utils/error');

const getAttendance = async (req, res) => {
    const { id } = req.params;

    try {
        const adminAttendance = await AdminAttendance.findById(id);
        if (!adminAttendance) {
            throw error('Attendance not found', 404);
        }
        if (adminAttendance.status === 'COMPLETED') {
            throw error('Attendance is already completed', 400); 
        }
        
        let attendance = await StudentAttendance.findOne({user: req.user._id, adminAttendance: id});
        if (attendance) {
            throw error('Attendance is already marked', 400);
        }
        
        attendance = new StudentAttendance({
            user: req.user._id,
            adminAttendance: id,
        })

        await attendance.save();
        return res.status(201).json(attendance);

    } catch (e) {
        next(e);
        
    }
};

const getStudentAttendance = async ( _req, res, next) => {
    try {
        const started = addMinutes( new Date(running.createdAt), running.timeLimit);
        if (isAfter(newDate(), started)) {
            running.status = 'COMPLETED';
            await running.save();
        }
    } catch (e) {
        next(e);
        
    }
};

const getAttendanceStatus = async (_req, res, next) => {
    try {
        const running = await findOne({status: 'RUNNING'});
        if (!running){
            throw error('Not Running', 400)
        }

        const started = addMinutes( new Date(running.createdAt), running.timeLimit);
        if (isAfter(newDate(), started)) {
            running.status = 'COMPLETED';
            await running.save();
        }
        return res.status(200).json(running)
    } catch (e) {
        next(e)
    }
    
}


module.exports = {
    getAttendance,
    getStudentAttendance,
    getAttendanceStatus,
}