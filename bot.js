                                                        //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢀⠤⠒⠒⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⠀  ⢀⡯⠴⠶⠶⠒⠢⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⠀  ⡎⡤⠖⠂⡀⠒⡢⡌⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠯⢭⣵⠑⣯⡭⢹⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀⢠⣤⠄⠀⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⢄⣈⣟⢁⢴⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⠀⠀⣀⢴⠒⡝⠁⠬⠛⣚⡩⠔⠉⢻⠒⣦⢄⠀⠀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⠀⢀⢎⠁⡌⢰⠁⠀⠀⠀⠀⠀⠀⠀⢸⠀⡛⠀⡷⡀⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⣀⣾⣷⣠⠃⢸⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⢹⢰⠁⢳⠀⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⢸⡿⠟⢿⢳⡏⠀⠀⠀⠀⠀⠀⠀⢠⡟⣶⣘⢞⡀⠘⡆⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⡼⢺⣯⢹⢰⡏⠒⠒⠒⠊⠀⠐⢒⣾⣹⣸⢹⣾⡇⠀⢣⠀⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⣏⣾⠃⠀⣼⡟⣢⣀⡠⠤⣀⡰⢋⡝⣱⣹⠇⣿⣧⣴⠸⡄⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⡏⡞⡆⢠⡇⣟⠭⡒⠭⠭⠤⠒⣡⠔⣽⡇⣂⣿⠟⠃⢀⡇⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⢧⡇⡧⢫⠃⣷⣽⣒⣍⣉⣈⡩⢴⠾⡳⢡⢸⣛⣪⡗⢴⠁⠀⠀⠀⠀
                                                        //⠀⠀⠀⠀⣼⢃⠷⣸⣤⣯⢞⡥⢍⣐⣂⠨⠅⠊⡠⢃⣟⢏⠹⣎⣆⡀⠀⠀⠀⠀
                                                        //⠀⡠⠶⠚⠛⠛⠽⢹⡟⡖⢓⠿⣝⠓⠒⠒⠒⠭⢤⠗⣯⣩⣽⣿⠷⣾⣿⢷⣆⠀
                                                        //⠜⣌⠢⢄⣀⡀⠀⡞⢡⠘⢄⠑⠨⢉⣀⠉⣀⠄⢊⠜⡸⠛⣿⡍⠉⠉⠈⢁⠁⠇
                                                        //⠈⢯⡓⠦⠤⠬⠭⣵⠀⠱⢄⠑⠲⠤⠤⠤⠤⠒⢁⡔⠁⢠⣏⣡⣤⣤⡶⠜⣻⠃
                                                        //⠀⠈⠙⠛⠒⠛⠻⠯⠕⠤⣀⣉⣓⣒⣂⣒⣒⣊⣁⣠⠔⠛⠂⠒⠛⠓⠛⠚⠉⠀
                                                        //
                                                        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                        //      Phật phù hộ, không bao giờ BUG
                                                        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/UserModel');
const InvitedUser = require('./models/InvitedUserModel');
const BankModel = require('./models/BankModel');
const GameModel = require('./models/GameModel');
const IdGameModel = require('./models/IdGameModel');
const SupportModel = require('./models/SupportModel');
const MailboxModel = require('./models/MailboxModel');
const WithdrawBankModel = require('./models/WithdrawBankModel');

const token = process.env.TELEGRAM_TOKEN;
const dbUri = process.env.MONGODB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối MongoDB:'));
db.once('open', () => {
    console.log('Đã kết nối tới MongoDB');
});

const session = {};
let loggedInUsername = '';
let selectedGameId = null;
const supportButtonChoices = {};


const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const opts = {
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: '🔐 Đăng nhập', callback_data: 'login' }, { text: '📝 Đăng ký', callback_data: 'register' }]
            ]
        })
    };
    bot.sendMessage(chatId, '<b>Chọn một tùy chọn để bắt đầu kiếm tiền:</b>', opts);
});

bot.on('callback_query', async (callbackQuery) => {
    const data = callbackQuery.data;
    const chatId = callbackQuery.message.chat.id;
    const messageId = callbackQuery.message.message_id;
    const [action, withdrawalId, username] = data.split('_');

    // Xử lý sự kiện khi người dùng nhấn vào các nút trên bàn phím
    if (data === 'login') {
        bot.sendMessage(chatId, 'Vui lòng nhập theo định dạng: /dangnhap Tên tài khoản&&Mật khẩu');
    } else if (data === 'register') {
        bot.sendMessage(chatId, 'Vui lòng nhập theo định dạng: /dangky Tên tài khoản&&Mật khẩu');

    }
    else if (data == 'invite_friends') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        const user = await User.findOne({ chatId: chatId });
        if (user) {
            if (user.inviteLocked) {
                bot.sendMessage(chatId, 'Chức năng Mời bạn bè của bạn đã bị khóa.');
            } else {
                const inviteLink = `https://t.me/kiemtienonl_bot?start=invite_${user.username}`;
                const invitedCount = await InvitedUser.countDocuments({ inviterChatId: chatId });
                bot.sendMessage(chatId, `Đây là liên kết mời của bạn:\n${inviteLink}`);
                bot.sendMessage(chatId, `Số người dùng đã mời: ${invitedCount}`);
            }
        } else {
            bot.sendMessage(chatId, 'Không thể tạo liên kết mời. Vui lòng thử lại sau.');
        }
    }
    else if (data == 'profile_info') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        try {
            // Tìm bản ghi trong bảng BankModel dựa trên username
            const existingBankRecord = await BankModel.findOne({ username: loggedInUsername });

            if (existingBankRecord) {
                // Nếu bản ghi tồn tại, gửi dữ liệu về cho người dùng
                const accountNumber = existingBankRecord.accountNumber;
                const bankName = existingBankRecord.bankName;
                const accountName = existingBankRecord.accountName;

                const message = `🏦 <b>Thông tin tài khoản ngân hàng:</b>\n\n` +
                    `🔹 <b>Số tài khoản:</b>         ${accountNumber}\n` +
                    `🔹 <b>Tên ngân hàng:</b>    ${bankName}\n` +
                    `🔹 <b>Tên tài khoản:</b>      ${accountName}`;

                bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
                ;
            } else {
                // Nếu bản ghi không tồn tại, yêu cầu người dùng nhập thông tin ngân hàng
                bot.sendMessage(chatId, 'Vui lòng nhập thông tin tài khoản ngân hàng theo định dạng:\n/bank STK && Tên ngân hàng && Tên tài khoản.');
            }
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại sau.');
        }
    }
    else if (data == 'update_game_link') {

        bot.sendMessage(chatId, `Vui lòng nhập theo cú pháp:\n/addgame Tên game&&Link game&&Số tiền`)
    }
    else if (data == 'game_list') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        try {
            const games = await GameModel.find(); // Lấy danh sách các game từ cơ sở dữ liệu
    
            if (games.length === 0) {
                bot.sendMessage(chatId, 'Hiện không có game nào.');
                return;
            }
    
            // Tạo nút inline cho mỗi trò chơi
            const inlineKeyboard = {
                inline_keyboard: games.map(game => {
                    return [{
                        text: `${game.gameName} - ${game.money}`,
                        url: game.gameLink
                    }];
                })
            };
    
            // Thêm hai nút Gửi ID và Kiểm tra vào cuối cùng của danh sách nút
            inlineKeyboard.inline_keyboard.push(
                [
                    { text: 'Gửi ID', callback_data: 'send_id_for_approval' },
                    { text: 'Kiểm tra', callback_data: 'check_info' }
                ]
            );
    
            // Gửi tin nhắn kèm nút inline cho người dùng
            bot.sendMessage(chatId, 'Danh sách các game:', { reply_markup: JSON.stringify(inlineKeyboard) });
    
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lấy danh sách game. Vui lòng thử lại sau.');
        }
    }
    
    
    

    else if (data == 'create_notification') {

        bot.sendMessage(chatId, '📝 Vui lòng nhập thông báo mới bằng cách sử dụng lệnh\n/adnf Nội dung thông báo.\nVí dụ: /adnf Cập nhật quy định mới.');

    }

    else if (data == 'send_id_for_approval') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        try {
            const games = await GameModel.find(); // Lấy danh sách các game từ cơ sở dữ liệu

            if (games.length === 0) {
                bot.sendMessage(chatId, 'Hiện không có game nào.');
                return;
            }

            // Tạo danh sách các button cho các game
            const gameButtons = games.map(game => ({
                text: game.gameName,
                callback_data: `select_game_${game._id}` // Sử dụng ID của game để xác định game được chọn
            }));

            // Tạo nút inline keyboard từ danh sách các button
            const inlineKeyboard = {
                inline_keyboard: [gameButtons]
            };

            // Gửi tin nhắn yêu cầu người dùng chọn game
            bot.sendMessage(chatId, 'Vui lòng chọn game:', { reply_markup: JSON.stringify(inlineKeyboard) });
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lấy danh sách game. Vui lòng thử lại sau.');
        }
    }
    else if (data.startsWith('select_game_')) {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        // Lấy ID của trò chơi từ dữ liệu callback
        const gameId = data.split('_')[2];

        try {
            // Tìm kiếm thông tin về trò chơi bằng gameId
            const game = await GameModel.findById(gameId);

            if (!game) {
                bot.sendMessage(chatId, 'Không tìm thấy thông tin về trò chơi này.');
                return;
            }

            // Lưu trữ ID và tên của trò chơi đã chọn (ở đây, tôi sử dụng biến toàn cục selectedGameId và selectedGameName)
            selectedGameId = gameId;
            selectedGameName = game.gameName;

            // Gửi tin nhắn yêu cầu người dùng nhập số điện thoại
            bot.sendMessage(chatId, `Vui lòng ID Game bằng lệnh /send`);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.');
        }
    }
    else if (data == 'check_info') {
        if (!loggedInUsername) {
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return;
        }
        try {
            const idGameRecords = await IdGameModel.find({});
            
            if (idGameRecords.length === 0) {
                bot.sendMessage(chatId, 'Hiện không có thông tin nào.');
                return;
            }
            
            let message = 'Thông tin:\n\n';
            
            for (let index = 0; index < idGameRecords.length; index++) {
                const record = idGameRecords[index];
                const stt = index + 1;
                let emoji = '';
                
                switch (record.status) {
                    case 'Đang duyệt':
                        emoji = '⏳';
                        break;
                    case 'Thành công':
                        emoji = '✅';
                        const user = await User.findOne({ username: record.username });
                        if (user) {
                            user.balance += 3000;
                            await user.save();
                        }
                        break;
                    case 'Từ chối':
                        emoji = '❌';
                        break;
                    default:
                        emoji = '';
                }
                
                const formattedStatus = `${emoji} ${record.status.padEnd(20)}`;
                message += `${stt}   |   ${record.gameName}   |   ${record.id}   |   ${formattedStatus}\n`;
            }
            
            bot.sendMessage(chatId, message);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lấy thông tin từ cơ sở dữ liệu. Vui lòng thử lại sau.');
        }
    }
    
    

    else if (data == 'logout') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, 'Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        // Đặt trạng thái loggedInUsername về rỗng
        loggedInUsername = '';

        bot.sendMessage(chatId, 'Bạn đã đăng xuất thành công.');
    }

    else if (data == 'game_id_list') {
        try {
            // Lấy danh sách các ID game có trạng thái là "Đang duyệt" từ cơ sở dữ liệu
            const gameRecords = await IdGameModel.find({ status: 'Đang duyệt' });

            if (gameRecords.length === 0) {
                bot.sendMessage(chatId, 'Hiện không có thông tin ID game nào đang được duyệt.');
                return;
            }

            // Tạo tin nhắn chứa danh sách ID game dưới dạng bảng
            let message = 'Danh sách các ID game đang được duyệt:\n\n';
            gameRecords.forEach((record, index) => {
                message += `${record.gameName} | ${record.id}\n`;
                if (index !== gameRecords.length - 1) {
                    message += '----------------------------------------------\n';
                }
            });

            // Tạo nút inline keyboard cho việc từ chối và xác nhận ID game
            const inlineKeyboard = {
                inline_keyboard: [
                    [
                        { text: 'Từ chối ❌', callback_data: 'reject_game_id' },
                        { text: 'Xác nhận ✅', callback_data: 'confirm_game_id' }
                    ]
                ]
            };

            // Gửi tin nhắn chứa danh sách ID game và nút inline keyboard cho người dùng
            bot.sendMessage(chatId, message, { reply_markup: JSON.stringify(inlineKeyboard) });
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lấy danh sách ID game đang được duyệt từ cơ sở dữ liệu. Vui lòng thử lại sau.');
        }
    }

    if (data === 'reject_game_id' || data === 'confirm_game_id') {
        try {
            // Lấy ID của bản ghi từ text của tin nhắn
            const gameId = callbackQuery.message.text.split(' | ')[1]; // Assumption: game id is in the format gameName | id

            // Tìm kiếm bản ghi tương ứng trong cơ sở dữ liệu
            const idGameRecord = await IdGameModel.findOne({ id: gameId });

            if (!idGameRecord) {
                bot.sendMessage(chatId, 'Không tìm thấy thông tin về ID game này.');
                return;
            }

            // Cập nhật trạng thái của bản ghi dựa trên nút được nhấn
            if (data === 'reject_game_id') {
                idGameRecord.status = 'Từ chối';
            } else if (data === 'confirm_game_id') {
                idGameRecord.status = 'Thành công';
            }

            // Lưu bản ghi đã cập nhật vào cơ sở dữ liệu
            await idGameRecord.save();

            // Gửi tin nhắn xác nhận cho admin
            bot.sendMessage(chatId, `Đã cập nhật trạng thái của ID game "${idGameRecord.gameName}" thành công.`);

            // Xóa tin nhắn chứa nút inline keyboard
            bot.deleteMessage(chatId, messageId);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi cập nhật trạng thái của ID game. Vui lòng thử lại sau.');
        }
    }


    else if (data === 'balance') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        try {
            // Tìm người dùng trong cơ sở dữ liệu dựa trên loggedInUsername
            const user = await User.findOne({ username: loggedInUsername });

            if (user) {
                // Chuyển số dư sang định dạng tiền VND
                const formattedBalance = new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(user.balance);

                // Gửi số dư hiện tại của người dùng với biểu tượng cảm xúc
                bot.sendMessage(chatId, `💰 Số dư hiện tại của bạn là: ${formattedBalance}`);
            } else {
                // Nếu không tìm thấy người dùng, gửi thông báo lỗi
                bot.sendMessage(chatId, '❌ Không tìm thấy thông tin người dùng.');
            }
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi truy vấn số dư. Vui lòng thử lại sau.');
        }
    }
    else if (data === 'withdraw') {
        try {
            if (!loggedInUsername) {
                // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập
                bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
                return; // Dừng xử lý tiếp theo
            }

            // Tạo mảng nút bấm chứa hai nút "Kiểm tra" và "Rút tiền"
            const buttons = [
                [{ text: 'Kiểm tra', callback_data: 'check_transaction' }],
                [{ text: 'Rút tiền', callback_data: 'make_withdrawal' }]
            ];

            // Gửi tin nhắn với đoạn text và các nút bấm
            bot.sendMessage(chatId, 'Vui lòng chọn một tùy chọn:', {
                reply_markup: {
                    inline_keyboard: buttons
                }
            });
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi hiển thị tùy chọn. Vui lòng thử lại sau.');
        }
    }

    else if (data == 'make_withdrawal') {
        try {
            if (!loggedInUsername) {
                // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập
                bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
                return; // Dừng xử lý tiếp theo
            }

            // Lấy thông tin ngân hàng từ model "Bank" dựa trên username
            const bankAccounts = await BankModel.find({ username: loggedInUsername });

            if (bankAccounts.length === 0) {
                bot.sendMessage(chatId, '⚠️ Bạn chưa có tài khoản ngân hàng nào được đăng ký.');
                return;
            }

            // Tạo danh sách các nút bấm từ bankName của từng tài khoản ngân hàng
            const replyMarkup = {
                inline_keyboard: bankAccounts.map(account => [{ text: account.bankName, callback_data: 'bank_' + account._id }])
            };

            // Gửi tin nhắn với đoạn text "Vui lòng chọn tài khoản rút tiền" và các nút bấm bankName
            bot.sendMessage(chatId, 'Vui lòng chọn tài khoản rút tiền:', { reply_markup: JSON.stringify(replyMarkup) });
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi hiển thị tài khoản rút tiền. Vui lòng thử lại sau.');
        }
    }

    else if (data.startsWith('bank_')) {
        try {
            const bankId = data.split('_')[1]; // Lấy id của tài khoản ngân hàng từ callback_data

            // Tìm kiếm tài khoản ngân hàng dựa trên id và username
            const bankAccount = await BankModel.findOne({ _id: bankId, username: loggedInUsername });

            if (!bankAccount) {
                bot.sendMessage(chatId, '⚠️ Bạn chưa liên kết tài khoản ngân hàng.');
                return;
            }

            // Gửi lại cách sử dụng lệnh /rt
            bot.sendMessage(chatId, 'Vui lòng sử dụng lệnh: /rt số tiền muốn rút để rút tiền.\nVD: /rt 10000\n\n⚠️Lưu ý: Min rút 50k');
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    }

    if (data === 'support') {
        const opts = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Vấn đề về ID game 🎮', callback_data: 'support_game_id' }],
                    [{ text: 'Vấn đề về mời bạn bè 👥', callback_data: 'support_invite_friends' }],
                    [{ text: 'Vấn đề về rút tiền 🏦', callback_data: 'support_bank_account' }],
                    [{ text: 'Vấn đề khác ❓', callback_data: 'support_other' }]
                ]
            })
        };
        bot.sendMessage(chatId, '📌 Vui lòng chọn loại vấn đề bạn gặp phải:', opts);
    } else if (data.startsWith('support_')) {
        const supportButtonText = {
            'support_game_id': 'Vấn đề về ID game 🎮',
            'support_invite_friends': 'Vấn đề về mời bạn bè 👥',
            'support_bank_account': 'Vấn đề về tài khoản ngân hàng 🏦',
            'support_other': 'Vấn đề khác ❓'
        }[data];

        // Lưu lựa chọn của người dùng vào bộ nhớ tạm thời
        supportButtonChoices[chatId] = supportButtonText;

        bot.sendMessage(chatId, `📌Vui lòng nhập vấn đề cần hỗ trợ theo định dạng:\n/help Vấn đề cần hỗ trợ`);
    }

    else if (data == 'mailbox') {
        if (!loggedInUsername) {
            // Nếu loggedInUsername chưa có giá trị, bắt người dùng đăng nhập bằng cách gửi tin nhắn yêu cầu đăng nhập
            bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return; // Dừng xử lý tiếp theo
        }
        try {
            // Lấy danh sách các thông báo từ model "Mailbox"
            const notifications = await MailboxModel.find({});

            // Kiểm tra nếu có thông báo
            if (notifications.length > 0) {
                let messageText = '📬 Thông báo mới:\n\n';
                notifications.forEach((notification, index) => {
                    messageText += `*${index + 1}. ${notification.text}*\n\n`;
                });



                // Gửi bảng thông báo cho người dùng với đoạn văn bản nổi bật hơn và nút "Không hiển thị lại"
                bot.sendMessage(chatId, messageText, { parse_mode: "Markdown" });
            } else {
                bot.sendMessage(chatId, '📬 Hòm thư của bạn hiện đang trống.');
            }
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi lấy danh sách thông báo. Vui lòng thử lại sau.');
        }
    }

    else if (data == 'user_list') {
        // ------------------------------
    }
    else if (data == 'statistics') {
        // 
    }
    else if (data === 'confirm_withdrawal') {
        if (!loggedInUsername) {
            bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return;
        }
    
        try {
            // Kiểm tra xem có đơn rút tiền đang được duyệt cho người dùng không
            const existingWithdrawal = await WithdrawBankModel.findOne({ username: loggedInUsername, status: 'Đang duyệt' });
    
            if (existingWithdrawal) {
                // Nếu có đơn rút tiền đang được duyệt, gửi tin nhắn cho người dùng
                const replyMessage = `⚠️ Bạn đang có một đơn rút tiền chưa được duyệt. Vui lòng đợi đơn rút tiền này thành công.`;
                const inlineKeyboard = {
                    inline_keyboard: [
                        [{ text: 'Kiểm tra đơn rút tiền', callback_data: 'check_transaction' }],
                        [{ text: 'Hỗ trợ', callback_data: 'support' }]
                    ]
                };
                bot.sendMessage(chatId, replyMessage, { reply_markup: inlineKeyboard });
                return;
            }
    
            // Nếu không có đơn rút tiền đang được duyệt, tiếp tục quy trình rút tiền bình thường
    
            // Lấy thông tin từ session
            const { username, accountNumber, bankName, accountName, amount, remainingBalance } = session[chatId];
    
            // Tạo một đối tượng mới từ WithdrawBankModel và lưu vào cơ sở dữ liệu
            const newWithdrawal = new WithdrawBankModel({
                username,
                accountNumber,
                bankName,
                accountName,
                amount,
                time: new Date(),
                status: 'Đang duyệt'
            });
    
            // Lưu thông tin vào cơ sở dữ liệu
            await newWithdrawal.save();
    
            // Cập nhật balance trong User model
            await User.findOneAndUpdate(
                { username: username }, // Tìm người dùng theo username
                { balance: remainingBalance }, // Cập nhật balance
                { new: true } // Trả về tài liệu mới đã cập nhật
            );
    
            // Gửi tin nhắn xác nhận cho người dùng
            const replyMessage = `✅ Giao dịch rút tiền thành công.\n⏳ Vui lòng chờ 1-2h để tiền về tài khoản.\n❓ Nếu sau thời gian đó tiền chưa về vui lòng chọn hỗ trợ`;
            const inlineKeyboard = {
                inline_keyboard: [
                    [{ text: 'Kiểm tra', callback_data: 'check_transaction' }],
                    [{ text: 'Hỗ trợ', callback_data: 'support' }]
                ]
            };
            bot.sendMessage(chatId, replyMessage, { reply_markup: inlineKeyboard });
    
            // Xóa thông tin từ session sau khi đã sử dụng
            delete session[chatId];
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    }
    
    
    
    else if (data == 'check_transaction') {
        if (!loggedInUsername) {
            bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return;
        }
        try {
            // Lấy giao dịch rút tiền gần đây nhất từ cơ sở dữ liệu cho người dùng hiện tại
            const latestWithdrawal = await WithdrawBankModel.findOne({ username: loggedInUsername }).sort({ time: -1 });

            if (!latestWithdrawal) {
                bot.sendMessage(chatId, 'Không có giao dịch rút tiền nào.');
                return;
            }

            // Tạo nội dung cho thông tin giao dịch
            const formattedAmount = formatVND(latestWithdrawal.amount);
            const formattedTime = formatDate(latestWithdrawal.time);
            const messageText = `🏦 Thông tin giao dịch rút tiền gần đây nhất:\n\n💳 Tên ngân hàng: ${latestWithdrawal.bankName}\n\n💰 Số tiền rút: ${formattedAmount}\n\n📅 Thời gian: ${formattedTime}\n\n🔍 Trạng thái: ${latestWithdrawal.status}`;

            // Gửi thông tin giao dịch cho người dùng
            bot.sendMessage(chatId, messageText);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lấy thông tin giao dịch rút tiền.');
        }
    }
    else if (data == 'cancel_withdrawal') {
        bot.sendMessage(chatId, `Bạn đã hủy bỏ đơn rút tiền thành công!`);
    }
    if (data === 'user_withdraw') {
        try {
            const pendingWithdrawals = await WithdrawBankModel.find({ status: 'Đang duyệt' });

            if (pendingWithdrawals.length === 0) {
                bot.sendMessage(chatId, 'Không có giao dịch rút tiền nào đang chờ duyệt.');
                return;
            }

            async function sendWithdrawalMessage(index) {
                if (index < pendingWithdrawals.length) {
                    const withdrawal = pendingWithdrawals[index];
                    const { username, bankName, accountNumber, accountName, amount } = withdrawal;
                    const formattedAmount = formatVND(amount);

                    const replyMessage = `Giao dịch rút tiền đang chờ duyệt của người dùng ${username}:\n\nTên ngân hàng: ${bankName}\n\nSTK: ${accountNumber}\n\nTên tài khoản: ${accountName}\nSố tiền: ${formattedAmount}`;

                    const inlineKeyboard = {
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: 'Xác nhận', callback_data: `confirm_${withdrawal._id.toString()}_${username}` },
                                    { text: 'Từ chối', callback_data: `reject_${withdrawal._id.toString()}_${username}` }
                                ]
                            ]
                        }
                    };

                    const sentMessage = await bot.sendMessage(chatId, replyMessage, inlineKeyboard);

                    withdrawal.messageId = sentMessage.message_id;
                    await withdrawal.save();

                    await sendWithdrawalMessage(index + 1);
                }
            }

            await sendWithdrawalMessage(0);
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã xảy ra lỗi khi lấy dữ liệu giao dịch. Vui lòng thử lại sau.');
        }
    }

});


//rút tiền

bot.onText(/^\/rt(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const input = match[1].trim(); // Lấy đầu vào sau lệnh /rt và loại bỏ khoảng trắng

    if (!input) {
        bot.sendMessage(chatId, '⚠️ Vui lòng nhập số tiền muốn rút sau lệnh /rt');
        return;
    }

    const amount = parseFloat(input);

    // Kiểm tra xem số tiền có hợp lệ không
    if (isNaN(amount) || amount < 50000) {
        bot.sendMessage(chatId, '⚠️ Số tiền không hợp lệ. Số tiền cần rút phải lớn hơn hoặc bằng 50,000 VND.');
        return;
    }

    try {
        if (!loggedInUsername) {
            bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
            return;
        }

        // Tìm thông tin tài khoản ngân hàng của người dùng
        const userBankInfo = await BankModel.findOne({ username: loggedInUsername });

        if (!userBankInfo) {
            bot.sendMessage(chatId, '⚠️ Không tìm thấy thông tin tài khoản ngân hàng của bạn.');
            return;
        }

        const { accountNumber, bankName, accountName } = userBankInfo;

        // Kiểm tra xem số dư có đủ để rút không
        const user = await User.findOne({ username: loggedInUsername });
        if (!user) {
            bot.sendMessage(chatId, '⚠️ Không tìm thấy thông tin người dùng.');
            return;
        }

        if (user.balance < amount) {
            bot.sendMessage(chatId, '⚠️ Số dư không đủ để thực hiện giao dịch này.');
            return;
        }

        // Tính toán số dư còn lại sau khi rút
        const remainingBalance = user.balance - amount;

        // Lưu thông tin vào session
        const sessionData = {
            username: loggedInUsername,
            accountNumber,
            bankName,
            accountName,
            amount,
            remainingBalance
        };

        // Gửi tin nhắn yêu cầu xác nhận
        const formattedAmount = formatVND(amount);
        const formattedRemainingBalance = formatVND(remainingBalance);
        const replyMessage = `🏦 Thông tin tài khoản của bạn:\n\n💳 Số tài khoản: ${accountNumber}\n\n🏦 Ngân hàng: ${bankName}\n\n👤 Tên tài khoản: ${accountName}\n\n💸 Số tiền muốn rút: ${formattedAmount}\n\n💰 Số dư còn lại: ${formattedRemainingBalance}\n\nVui lòng kiểm tra thông tin trên`;

        bot.sendMessage(chatId, replyMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Xác nhận', callback_data: 'confirm_withdrawal' }, { text: 'Hủy bỏ', callback_data: 'cancel_withdrawal' }]
                ]
            }
        });

        // Lưu sessionData vào session
        session[chatId] = sessionData;
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại sau.');
    }
});



//tiefn vnd
function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

//formattgian

function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

//tạo thông báo mới


bot.onText(/^\/adnf (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const notificationText = match[1];

    try {
        const newNotification = new MailboxModel({
            text: notificationText
        });

        await newNotification.save();
        bot.sendMessage(chatId, '✅ Thông báo mới đã được tạo thành công.');
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi tạo thông báo mới. Vui lòng thử lại sau.');
    }
});



////helppppp

bot.onText(/\/help (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const issueText = match[1];

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!loggedInUsername) {
        bot.sendMessage(chatId, '⚠️ Bạn cần đăng nhập trước khi sử dụng tính năng này. Sử dụng lệnh /start để đăng nhập.');
        return;
    }

    // Lấy supportButton từ bộ nhớ tạm thời
    const supportButton = supportButtonChoices[chatId];

    if (!supportButton) {
        bot.sendMessage(chatId, '⚠️ Vui lòng chọn loại vấn đề trước khi nhập vấn đề cần hỗ trợ.');
        return;
    }

    // Tạo bản ghi mới trong cơ sở dữ liệu với trạng thái mặc định là 'đang chờ phản hồi'
    const supportIssue = new SupportModel({
        username: loggedInUsername,
        supportButton: supportButton,
        issueText: issueText,
        status: 'Đang chờ phản hồi'  // Trạng thái mặc định khi tạo
    });

    try {
        await supportIssue.save();
        bot.sendMessage(chatId, '✅ Vấn đề của bạn đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        // Xóa lựa chọn của người dùng khỏi bộ nhớ tạm thời sau khi vấn đề đã được lưu
        delete supportButtonChoices[chatId];
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, '⚠️ Đã có lỗi xảy ra khi gửi vấn đề của bạn. Vui lòng thử lại sau.');
    }
});



bot.onText(/^\/send (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1];

    // Kiểm tra xem người dùng đã chọn trò chơi nào trước đó và có lưu trữ username không
    if (loggedInUsername && selectedGameId && selectedGameName) {
        try {
            // Lưu thông tin vào bảng dữ liệu IdGame
            const idGameRecord = new IdGameModel({
                username: loggedInUsername,
                gameName: selectedGameName,
                id: userInput
            });
            await idGameRecord.save();

            // Gửi tin nhắn xác nhận cho người dùng
            bot.sendMessage(chatId, 'Thông tin của bạn đã được gửi cho admin. Vui lòng đợi admin kiểm tra!', {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Kiểm tra', callback_data: 'check_info' }
                        ]
                    ]
                }
            });

            // Đặt lại selectedGameId và selectedGameName về null để chuẩn bị cho lần chọn game tiếp theo
            selectedGameId = null;
            selectedGameName = null;
        } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại sau.');
        }
    } else {
        // Nếu không có đủ thông tin, thông báo cho người dùng
        bot.sendMessage(chatId, 'Vui lòng đăng nhập và chọn một trò chơi trước khi nhập số điện thoại.');
    }
});



bot.onText(/^\/bank (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&').map(item => item.trim()); // Tách thông tin và loại bỏ dấu cách
    const accountNumber = userInput[0];
    const bankName = userInput[1];
    const accountName = userInput[2];

    try {
        // Kiểm tra xem đã có người dùng đăng nhập hay chưa
        if (!loggedInUsername) {
            bot.sendMessage(chatId, 'Vui lòng đăng nhập trước khi thêm thông tin tài khoản.');
            return;
        }

        // Tạo một bản ghi mới trong model BankModel và lưu vào cơ sở dữ liệu
        const newBankRecord = new BankModel({
            username: loggedInUsername,
            accountNumber: accountNumber,
            bankName: bankName,
            accountName: accountName
        });

        await newBankRecord.save(); // Lưu bản ghi vào cơ sở dữ liệu

        // Gửi thông báo cho người dùng rằng thông tin tài khoản đã được lưu thành công
        bot.sendMessage(chatId, 'Thông tin tài khoản đã được lưu thành công.');
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi lưu thông tin tài khoản. Vui lòng thử lại sau.');
    }
});




bot.onText(/^\/dangky (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&');
    const username = userInput[0];
    const password = userInput[1];

    try {
        // Kiểm tra xem tên người dùng đã tồn tại chưa
        const existingUsername = await User.findOne({ username: username });
        if (existingUsername) {
            bot.sendMessage(chatId, 'Tên tài khoản đã tồn tại. Vui lòng chọn tên khác.');
            return;
        }

        // Kiểm tra xem chat ID đã tồn tại chưa
        const existingChatId = await User.findOne({ chatId: chatId });
        if (existingChatId) {
            bot.sendMessage(chatId, 'Chat ID của bạn đã được sử dụng cho tài khoản khác. Vui lòng sử dụng tài khoản đó hoặc liên hệ hỗ trợ.');
            return;
        }

        // Tạo người dùng mới
        const newUser = new User({ chatId: chatId, username: username, password: password });
        await newUser.save();
        console.log(chatId, username, password);
        bot.sendMessage(chatId, `🎉 Bạn đã đăng ký thành công. Vui lòng /start để đăng nhập`);

        // Gọi hàm xử lý hoàn tất đăng ký
        await handleUserRegistrationComplete(newUser.id, chatId);

        // Xóa tin nhắn gửi yêu cầu đăng ký
        bot.deleteMessage(chatId, msg.message_id);
    } catch (err) {
        console.error(err);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau.');
    }
});


async function handleUserRegistrationComplete(userId, chatId) {
    try {
        const invitedUser = await InvitedUser.findOne({ invitedChatId: chatId });

        if (invitedUser && !invitedUser.registrationCompleted) {
            // Cập nhật trạng thái đăng ký hoàn tất
            invitedUser.registrationCompleted = true;
            await invitedUser.save();

            // Tìm thông tin người mời
            const inviterUser = await User.findOne({ username: invitedUser.inviterUsername });

            if (inviterUser) {
                // Cộng thêm 3000 vào balance hiện tại của người mời
                inviterUser.balance += 3000;
                await inviterUser.save();

                // Đếm số lượng người dùng được mời bởi người mời
                const invitedCount = await InvitedUser.countDocuments({ inviterUsername: invitedUser.inviterUsername, registrationCompleted: true });

                // Gửi thông báo với chatId của người mời
                bot.sendMessage(inviterUser.chatId, `Bạn đã mời thành công một người.\nTổng số người đã mời: ${invitedCount}\nSố dư mới của bạn là: ${inviterUser.balance}đ`);
            }
        }
    } catch (error) {
        console.error(error);
    }
}


bot.onText(/^\/dangnhap (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&');
    const username = userInput[0];
    const password = userInput[1];

    try {
        if (username === "admin" && password === "admin") {
            // Xử lý đăng nhập cho admin
            loggedInUsername = username; // Lưu tên người dùng vào biến toàn cục
            const welcomeMessage = "Xin chào Admin!";
            bot.deleteMessage(chatId, msg.message_id);
            const replyMarkup = {
                inline_keyboard: [
                    [
                        { text: '🆔 Danh sách ID Game cần duyệt', callback_data: 'game_id_list' }
                    ],
                    [
                        { text: '📊 Tạo thông báo mới', callback_data: 'create_notification' }
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
                    // Lưu tên người dùng vào biến toàn cục
                    loggedInUsername = username;


                    // Đếm số lượng mục trong mailbox của người dùng
                    const mailboxCount = await MailboxModel.countDocuments();


                    // Cập nhật nội dung của nút bấm tùy thuộc vào số lượng mục trong mailbox
                    const mailboxButtonText = mailboxCount > 0 ? `📬 Hòm thư (${mailboxCount})` : '📬 Hòm thư';

                    // Tiếp tục xử lý đăng nhập bình thường
                    bot.sendMessage(chatId, `🎉 Thành công.`)
                    const welcomeMessage = `🎉 Chào mừng ${username} quay trở lại!`;
                    const replyMarkup = {
                        inline_keyboard: [
                            [
                                { text: '💰 Số dư', callback_data: 'balance' },
                                { text: '👫 Mời bạn bè(3.000đ)', callback_data: 'invite_friends' }
                            ],
                            [
                                { text: '🎮 Danh sách các game', callback_data: 'game_list' },
                                { text: mailboxButtonText, callback_data: 'mailbox' }
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

// Hàm để lấy tên người dùng từ biến toàn cục
function getLoggedInUsername() {
    return loggedInUsername;
}

bot.onText(/^\/addgame (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userInput = match[1].split('&&').map(item => item.trim()); // Tách thông tin và loại bỏ dấu cách
    const gameName = userInput[0];
    const gameLink = userInput[1];
    const moneyInput = userInput[2]; // Lấy số tiền từ đầu vào

    try {
        // Kiểm tra xem người dùng có phải là admin hay không
        if (getLoggedInUsername() !== "admin") {
            bot.sendMessage(chatId, 'Chỉ admin mới có quyền cập nhật link game.');
            return;
        }

        // Tạo một bản ghi mới trong model GameModel và lưu vào cơ sở dữ liệu
        const newGameRecord = new GameModel({
            gameName: gameName,
            gameLink: gameLink,
            money: moneyInput // Thêm trường số tiền
        });

        await newGameRecord.save(); // Lưu bản ghi vào cơ sở dữ liệu

        // Gửi thông báo cho admin rằng link game đã được cập nhật thành công
        bot.sendMessage(chatId, `Link game "${gameName}" đã được cập nhật thành công.`);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        bot.sendMessage(chatId, 'Đã có lỗi xảy ra khi cập nhật link game. Vui lòng thử lại sau.');
    }
});



bot.onText(/\/start invite_(\w+)/, async (msg, match) => {
    const inviterUsername = match[1]; // Lấy username của người mời từ mẫu lệnh
    const invitedChatId = msg.chat.id; // Lấy chatId của người được mời

    try {
        // Tìm thông tin người mời từ cơ sở dữ liệu
        const inviterUser = await User.findOne({ username: inviterUsername });

        if (!inviterUser) {
            bot.sendMessage(invitedChatId, 'Không tìm thấy thông tin người mời. Lời mời có thể đã hết hạn.');
            return;
        }

        // Kiểm tra xem invitedChatId đã tồn tại trong bảng InvitedUser chưa
        const existingInvite = await InvitedUser.findOne({ invitedChatId: invitedChatId });

        if (existingInvite) {
            // Tăng số lần vi phạm
            inviterUser.inviteViolations += 1;

            if (inviterUser.inviteViolations >= 3) {
                // Khóa chức năng mời bạn bè nếu vi phạm quá 3 lần
                inviterUser.inviteLocked = true;
                bot.sendMessage(inviterUser.chatId, 'Bạn đã vi phạm quá 3 lần. Chức năng Mời bạn bè đã bị khóa.');
            } else {
                bot.sendMessage(inviterUser.chatId, `Bạn đã vi phạm ${inviterUser.inviteViolations} lần. Nếu vi phạm quá 3 lần, chức năng Mời bạn bè sẽ bị khóa.`);
            }

            await inviterUser.save();
        } else {
            if (inviterUser.inviteLocked) {
                bot.sendMessage(inviterUser.chatId, 'Chức năng Mời bạn bè của bạn đã bị khóa.');
            } else {
                // Lưu thông tin người mời và người được mời vào bảng InvitedUser
                const newInvitedUser = new InvitedUser({
                    invitedChatId: invitedChatId, // Lưu chatId của người được mời
                    inviterUsername: inviterUsername // Lưu username của người mời
                });
                await newInvitedUser.save();

                // Đếm số lượng người dùng được mời bởi người mời
                const invitedCount = await InvitedUser.countDocuments({ inviterUsername: inviterUsername });

                // Cộng thêm 3000 vào balance hiện tại của người mời
                inviterUser.balance += 3000;
                await inviterUser.save();

                // Gửi thông báo với chatId của người mời
                bot.sendMessage(inviterUser.chatId, `Bạn đã mời thành công một người.\nTổng số người đã mời: ${invitedCount}\nSố dư mới của bạn là: ${inviterUser.balance}đ`);

            }
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(invitedChatId, 'Đã có lỗi xảy ra khi xử lý lời mời.');
    }
});


bot.onText(/^\/chatid/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Chat ID của bạn là: ${chatId}`);
});
//--------------------------------------------------------------------------------------
