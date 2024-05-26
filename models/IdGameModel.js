const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdGameSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Đang duyệt', 'Từ chối', 'Thành công'],
        default: 'Đang duyệt'
    }
});


const IdGameModel = mongoose.model('IdGame', IdGameSchema);

module.exports = IdGameModel;
