const { addMinutes, isAfter } = require('date-fns')

const AdminAttendance = require('../models/AdminAttendance');
const StudentAttedance = require('../models/StudentAttendance');

const error = require('../utils/error');

const getAttendance = async (req, res) => {

    try {
        const adminAttendance = await AdminAttendance.findById(id);
        if (!adminAttendance) {
            throw error('Attendance not found', 404);
        }
    } catch (e) {
        next(e);
        
    }
};

const getStudentAttendance = async (req, res) => {
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