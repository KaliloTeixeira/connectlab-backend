const mongoose = require('mongoose');

const LabScheduleSchema = new mongoose.Schema({
    weekday: {
        type: Number,
        required: true,
    },
    vacancies: {
        type: Number,
        required: true,
    },
    time_from: {
        type: Number,
        required: true,
    },
    time_to: {
        type: Number,
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true,
    },

});

mongoose.model('LabSchedule', LabScheduleSchema);