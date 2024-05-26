const { BankModel } = require('../models');
const { bot, loggedInUsername } = require('../bot');

bot.onText(/^\/bank (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&').map(item => item.trim());
    const accountNumber = userInput[0];
    const bankName = userInput[1];
    const accountName = userInput[2];

    try {
        if (!loggedInUsername) {
            bot.sendMessage(chatId, 'Vui lòng đăng nhập trước khi thêm thông tin tài khoản.');
            return;
        }

        const newBankRecord = new BankModel({
            username: loggedInUsername,
            accountNumber: accountNumber,
            bankName: bankName,
            accountName: accountName
        });

        await newBankRecord.save();

        bot.sendMessage(chatId, 'Thông tin tài khoản đã được lưu thành công.');
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lưu thông tin tài khoản. Vui lòng thử lại sau.');
    }
});
