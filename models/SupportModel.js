const mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    username: { type: String, required: true },
    supportButton: { type: String, required: true },
    issueText: { type: String, required: true },
    status: { 
        type: String, 
        required: true, 
        default: 'Đang chờ phản hồi' // Giá trị mặc định
    },
    createdAt: { type: Date, default: Date.now }
});

// Middleware để kiểm tra và cập nhật giá trị mặc định nếu có dữ liệu mới
SupportSchema.pre('save', function(next) {
    if (this.isNew && this.status === '') {
        this.status = 'Đang chờ phản hồi'; // Thay đổi giá trị mặc định nếu trống
    }
    next();
});

const SupportModel = mongoose.model('Support', SupportSchema);

module.exports = SupportModel;
