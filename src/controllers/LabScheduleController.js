const mongoose = require('mongoose');
const { query } = require('express');

const LabSchedule = mongoose.model('LabSchedule');

module.exports = {

    async listAvailableTimes(req, res) {
        const { page = 1 } = req.query;
        const availableTimes = await LabSchedule.paginate({}, { page, limit: 10 });

        return res.json(availableTimes);
    },

    async addAvailableTime(req, res) {
        const availableTime = await LabSchedule.create(req.body);

        return res.json(availableTime);
    }

}