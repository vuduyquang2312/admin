const mongoose = require('mongoose');

// Định nghĩa Schema
const MailboxSchema = new mongoose.Schema({
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const MailboxModel = mongoose.model('Mailbox', MailboxSchema);

module.exports = MailboxModel;
