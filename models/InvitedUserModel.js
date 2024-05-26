const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invitedUserSchema = new Schema({
    invitedChatId: { type: String, required: true }, // ChatId của người được mời
    inviterUsername: { type: String, required: true } // Tên người mời
});

const InvitedUser = mongoose.model('InvitedUser', invitedUserSchema);

module.exports = InvitedUser;
