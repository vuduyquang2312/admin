const { User, InvitedUser } = require('../models');
const { bot } = require('../bot');

bot.onText(/\/start invite_(\w+)/, async (msg, match) => {
    const invitedUsername = match[1];
    const inviterChatId = msg.chat.id;

    try {
        const invitedUser = await User.findOne({ username: invitedUsername });

        if (invitedUser) {
            const existingInvite = await InvitedUser.findOne({ inviterChatId: inviterChatId });

            if (existingInvite) {
                invitedUser.inviteViolations += 1;

                if (invitedUser.inviteViolations >= 3) {
                    bot.sendMessage(inviterChatId, 'Bạn đã vi phạm quá nhiều lần, không thể mời thêm.');
                    return;
                }

                await invitedUser.save();
            } else {
                const newInvite = new InvitedUser({ inviterChatId: inviterChatId, invitedUsername: invitedUsername });
                await newInvite.save();
            }

            bot.sendMessage(inviterChatId, `Bạn đã mời thành công người dùng: ${invitedUsername}`);
        } else {
            bot.sendMessage(inviterChatId, 'Người dùng được mời không tồn tại.');
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(inviterChatId, 'Đã có lỗi xảy ra khi mời người dùng. Vui lòng thử lại sau.');
    }
});
