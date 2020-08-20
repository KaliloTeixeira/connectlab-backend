const mongoose = require('mongoose');

const School = mongoose.model('School');

module.exports = {

    async listSchools(req, res) {
        const schools = await School.find();

        return res.json(schools)
    },

    async addSchool(req, res) {
        const school = await School.create(req.body);

        return res.json(school);
    },

}