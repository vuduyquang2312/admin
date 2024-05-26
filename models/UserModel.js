const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    chatId: {
        type: String,
        unique: true, // Ensure chatId is unique
        required: true // Ensure chatId is required
    },
    username: {
        type: String,
        unique: true, // Ensure username is unique
        required: true // Ensure username is required
    },
    password: {
        type: String,
        required: true // Ensure password is required
    },
    inviteViolations: {
        type: Number,
        default: 0
    },
    inviteLocked: {
        type: Boolean,
        default: false
    },
    balance: {
        type: Number,
        default: 0
    },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
