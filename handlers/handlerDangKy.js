const { User } = require('../models');
const { bot } = require('../bot');

bot.onText(/^\/dangky (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&');
    const username = userInput[0];
    const password = userInput[1];

    try {
        const existingUser = await User.findOne({ $or: [{ chatId: chatId }, { username: username }] });
        if (existingUser) {
            bot.sendMessage(chatId, 'Tài khoản hoặc chat ID đã tồn tại. Vui lòng chọn thông tin khác.');
            return;
        }

        const newUser = new User({ chatId: chatId, username: username, password: password });
        await newUser.save();

        bot.sendMessage(chatId, `🎉 Bạn đã đăng ký thành công. Vui lòng /start để đăng nhập`);
        bot.deleteMessage(chatId, msg.message_id);
    } catch (err) {
        console.error(err);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.');
    }
});
