const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const MailboxModel = require('./models/MailboxModel'); // Import model
const SupportModel = require('./models/SupportModel');
const WithdrawBankModel = require('./models/WithdrawBankModel');
const IdGameModel = require('./models/IdGameModel');
const GameModel = require('./models/GameModel');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware để cho phép server đọc dữ liệu từ phần thân của request (req.body)
app.use(express.json());
app.use(cors());

// Kết nối tới cơ sở dữ liệu MongoDB
mongoose.connect('mongodb://localhost:27017/salegame', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

//API LẤY DỮ LIỆU

// Route handler để lấy danh sách thông báo
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await MailboxModel.find();
        res.status(200).send(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).send({ error: 'Error retrieving messages' });
    }
});


// Định nghĩa API endpoint để lưu tin nhắn vào model Mailbox
app.post('/api/saveMessage', async (req, res) => {
    try {
        const { text } = req.body;
        // Tạo một bản ghi mới trong model Mailbox
        const newMessage = new MailboxModel({ text });
        // Lưu bản ghi vào cơ sở dữ liệu
        await newMessage.save();
        res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Error saving message' });
    }
});
// Định nghĩa API endpoint để xóa tin nhắn từ model Mailbox
app.delete('/api/messages/:id', async (req, res) => {
    try {
        const messageId = req.params.id;
        // Xóa bản ghi từ model Mailbox dựa trên id
        await MailboxModel.findByIdAndDelete(messageId);
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Error deleting message' });
    }
});


//suppory api

app.get('/api/supports', async (req, res) => {
    try {
        const supports = await SupportModel.find();
        res.status(200).send(supports);
    } catch (error) {
        console.error('Error retrieving supports:', error);
        res.status(500).send({ error: 'Error retrieving supports' });
    }
});

app.put('/api/supports/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    try {
        const updatedSupport = await SupportModel.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).send(updatedSupport);
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).send({ error: 'Error updating status' });
    }
});


//rut tien api

app.get('/api/withdrawbanks', async (req, res) => {
    try {
        const withdrawBanks = await WithdrawBankModel.find();
        res.status(200).send(withdrawBanks);
    } catch (error) {
        console.error('Error retrieving withdraw banks:', error);
        res.status(500).send({ error: 'Error retrieving withdraw banks' });
    }
});


///idgame api
app.get('/api/idgames', async (req, res) => {
    try {
        const idGames = await IdGameModel.find();
        res.status(200).send(idGames);
    }
    catch(error){
        console.error('Error retrieving id games:', error);
        res.status(500).send({ error: 'Error retrieving id games' });
    }
})
// API endpoint để cập nhật trạng thái ID game
app.put('/api/idgames/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        // Cập nhật trạng thái của ID game trong cơ sở dữ liệu
        const updatedIdGame = await IdGameModel.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).send(updatedIdGame);
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).send({ error: 'Error updating status' });
    }
});


// API để lấy danh sách game
app.get('/api/games', async (req, res) => {
    try {
        const games = await GameModel.find();
        res.status(200).send(games);
    } catch (error) {
        console.error('Error retrieving games:', error);
        res.status(500).send({ error: 'Error retrieving games' });
    }
});

// API để lưu game mới vào model Game
app.post('/api/games', async (req, res) => {
    try {
        const { gameName, gameLink, money } = req.body;
        const newGame = new GameModel({ gameName, gameLink, money });
        await newGame.save();
        res.status(200).json({ message: 'Game saved successfully' });
    } catch (error) {
        console.error('Error saving game:', error);
        res.status(500).json({ error: 'Error saving game' });
    }
});

//API Xóa game khỏi model
app.delete('/api/games/:id', async (req, res) => {
    try {
        const gameId = req.params.id;
        await GameModel.findByIdAndDelete(gameId);
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
        console.error('Error deleting game:', error);
        res.status(500).json({ error: 'Error deleting game' });
    }
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
