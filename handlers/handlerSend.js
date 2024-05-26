const { IdGameModel } = require('../models');
const { bot, loggedInUsername, selectedGameId, selectedGameName, setSelectedGameId, setSelectedGameName } = require('../bot');

bot.onText(/^\/send (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1];

    if (loggedInUsername && selectedGameId && selectedGameName) {
        try {
            const idGameRecord = new IdGameModel({
                username: loggedInUsername,
                gameName: selectedGameName,
                id: userInput
            });
            await idGameRecord.save();

            bot.sendMessage(chatId, 'Thông tin của bạn đã được gửi cho admin. Vui lòng đợi admin kiểm tra!', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kiểm tra', callback_data: 'check_info' }]
                    ]
                }
            });

            setSelectedGameId(null);
            setSelectedGameName(null);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại sau.');
        }
    } else {
        bot.sendMessage(chatId, 'Vui lòng đăng nhập và chọn một trò chơi trước khi nhập số điện thoại.');
    }
});
