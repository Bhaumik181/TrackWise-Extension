const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({

    domain: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    timeSpent: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model(
    "Activity",
    activitySchema
);