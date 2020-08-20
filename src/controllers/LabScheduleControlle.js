const mongoose = require('mongoose');
const { response } = require('express');

const LabSchedule = mongoose.model('LabSchedule');

module.exports = {

    async listAvailableTimes(req, res) {
        const availableTimes = await LabSchedule.find();

        return res.json(availableTimes);
    },

    async addAvailableTime(req, res) {
        const availableTime = await LabSchedule.create(req.body);

        return res.json(availableTime);
    }

}