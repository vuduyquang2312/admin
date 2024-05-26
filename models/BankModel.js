const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankSchema = new Schema({
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
    }
});

const BankModel = mongoose.model('Bank', BankSchema);

module.exports = BankModel;
