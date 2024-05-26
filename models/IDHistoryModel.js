const mongoose = require('mongoose');

const IDHistorySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    numberOfGames: {
        type: Number,
        default: 0
    },
    idgames: [{
        type: Number
    }]
});

const IDHistory = mongoose.model('IDHistory', IDHistorySchema);

module.exports = IDHistory;
