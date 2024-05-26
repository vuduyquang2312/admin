const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    gameName: {
        type: String,
        required: true
    },
    gameLink: {
        type: String,
        required: true
    },
    money: {
        type: String,
        default: 0
    }
});

const GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
