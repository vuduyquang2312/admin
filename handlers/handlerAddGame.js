const { GameModel } = require('../models');
const { bot, loggedInUsername } = require('../bot');
const { getLoggedInUsername } = require('../utils');

bot.onText(/^\/addgame (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&').map(item => item.trim());
    const gameName = userInput[0];
    const gameLink = userInput[1];
    const moneyInput = userInput[2];

    try {
        if (getLoggedInUsername() !== "admin") {
            bot.sendMessage(chatId, 'Chỉ admin mới có quyền cập nhật link game.');
            return;
        }

        const newGameRecord = new GameModel({
            gameName: gameName,
            gameLink: gameLink,
            money: moneyInput
        });

        await newGameRecord.save();

        bot.sendMessage(chatId, `Link game "${gameName}" đã được cập nhật thành công.`);
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi cập nhật link game. Vui lòng thử lại sau.');
    }
});
