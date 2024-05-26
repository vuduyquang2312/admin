const { User } = require('../models');
const { bot, setLoggedInUsername } = require('../bot');

bot.onText(/^\/dangnhap (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&');
    const username = userInput[0];
    const password = userInput[1];

    try {
        if (username === "admin" && password === "admin") {
            setLoggedInUsername(username);
            const welcomeMessage = "Xin chào Admin!";
            bot.deleteMessage(chatId, msg.message_id);
            const replyMarkup = {
                inline_keyboard: [
                    [
                        { text: '👨‍💼 Danh sách người dùng', callback_data: 'user_list' }
                    ],
                    [
                        { text: '🆔 Danh sách ID Game cần duyệt', callback_data: 'game_id_list' }
                    ],
                    [
                        { text: '📊 Thống kê', callback_data: 'statistics' }
                    ],
                    [
                        { text: '🔄 Cập nhật link game', callback_data: 'update_game_link' }
                    ],
                    [
                        { text: '💸 Người dùng rút tiền', callback_data: 'user_withdraw' }
                    ],
                    [
                        { text: '📢 Báo cáo từ người dùng', callback_data: 'user_report' }
                    ]
                ]
            };

            const keyboard = {
                reply_markup: JSON.stringify(replyMarkup)
            };

            bot.sendMessage(chatId, welcomeMessage, keyboard);
        } else {
            const user = await User.findOne({ username: username });

            if (user) {
                if (password === user.password) {
                    setLoggedInUsername(username);

                    bot.sendMessage(chatId, `🎉 Thành công.`);
                    const welcomeMessage = `🎉 Chào mừng ${username} quay trở lại!`;
                    const replyMarkup = {
                        inline_keyboard: [
                            [
                                { text: '💰 Số dư', callback_data: 'balance' },
                                { text: '👫 Mời bạn bè(3.000đ)', callback_data: 'invite_friends' }
                            ],
                            [
                                { text: '🎮 Danh sách các game', callback_data: 'game_list' },
                                { text: '🕒 Lịch sử', callback_data: 'history' }
                            ],
                            [
                                { text: 'ℹ️ Thông tin cá nhân', callback_data: 'profile_info' },
                                { text: '💸 Rút tiền', callback_data: 'withdraw' }
                            ],
                            [
                                { text: '❓ Hỗ trợ', callback_data: 'support' },
                                { text: '🚪 Đăng xuất', callback_data: 'logout' }
                            ]
                        ]
                    };

                    const keyboard = {
                        reply_markup: JSON.stringify(replyMarkup)
                    };

                    setTimeout(() => {
                        bot.sendMessage(chatId, welcomeMessage, keyboard);
                    }, 2000);

                    bot.deleteMessage(chatId, msg.message_id);

                } else {
                    bot.sendMessage(chatId, '❌ Tên tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
                }
            } else {
                bot.sendMessage(chatId, '❌ Tài khoản không tồn tại. Vui lòng kiểm tra lại tên tài khoản.');
            }
        }

    } catch (err) {
        console.error(err);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
    }
});
