const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

LabScheduleSchema.plugin(mongoosePaginate);

mongoose.model('LabSchedule', LabScheduleSchema);