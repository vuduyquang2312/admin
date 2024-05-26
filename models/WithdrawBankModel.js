const mongoose = require('mongoose');

// Định nghĩa Schema
const WithdrawBankSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Đang duyệt', 'Thành công', 'Thất bại'],
        default: 'Đang duyệt'
    },
    messageId: {
        type: String
    }
});

// Tạo model từ schema
const WithdrawBankModel = mongoose.model('WithdrawBank', WithdrawBankSchema);

module.exports = WithdrawBankModel;
