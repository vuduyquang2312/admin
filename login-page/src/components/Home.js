import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';


const mongoose = require('mongoose');

function ReportForm({ onReportSubmit, reportId }) {
    const [reportText, setReportText] = useState('');

    const handleSubmit = () => {
        onReportSubmit(reportId, reportText);
        setReportText('');
    };

    return (
        <div className="report-form">
            <input
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="Nhập phản hồi của bạn..."
            />
            <button onClick={handleSubmit}>Xác nhận</button>
        </div>
    );
}


function Home() {
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [reports, setReports] = useState([]);


    const [games, setGames] = useState([]);
    const [gameName, setGameName] = useState('');
    const [gameLink, setGameLink] = useState('');
    const [money, setMoney] = useState('');

    const [idGames, setIdGames] = useState([]);

    const [withdrawBanks, setWithdrawBanks] = useState([]);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState(''); // Khởi tạo message
    const [showReportForm, setShowReportForm] = useState(false);
    const [selectedReportId, setSelectedReportId] = useState(null);

    useEffect(() => {
        // Gọi API để lấy danh sách thông báo khi component được tải lần đầu
        fetchMessages();
    }, []);
    useEffect(() => {

        fetchReports();
    }, [content]);
    useEffect(() => {
        fetchGames();
    }, []);
    useEffect(() => {
        fetchIdGames();
    }, []);
    useEffect(() => {
        fetchWithdrawBanks();
    }, []);
    const fetchMessages = async () => {
        try {
            // Gọi API để lấy danh sách thông báo
            const response = await axios.get('http://localhost:5000/api/messages');
            // Cập nhật state với danh sách thông báo từ máy chủ
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };
    const fetchReports = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/supports');
            setReports(response.data);
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };
    const fetchGames = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/games');
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };
    const handleSaveGame = async () => {
        try {
            const newGame = { gameName, gameLink, money };
            await axios.post('http://localhost:5000/api/games', newGame);
            window.alert('Game mới được lưu thành công');
            fetchGames(); // Refresh the list after saving
        } catch (error) {
            console.error('Error saving game:', error);
            setMessage('Error saving game');
        }
    };
    const handleDeleteGame = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/games/${id}`);
            window.alert('Game mới được xóa thành công');
            fetchGames(); // Refresh the list after deleting
        } catch (error) {
            console.error('Error deleting game:', error);
            setMessage('Error deleting game');
        }
    };

    const fetchIdGames = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/idgames');
            setIdGames(response.data);
        } catch (error) {
            console.error('Error fetching idgames:', error);
        }
    };
    const handleSuccess = (id) => {
        // Gửi yêu cầu cập nhật status thành "Thành công" lên server
        axios.put(`http://localhost:5000/api/idgames/${id}`, { status: 'Thành công' })
            .then(response => {
                // Xử lý phản hồi từ server (nếu cần)
                window.alert('Thành công')
                // Tải lại danh sách ID games sau khi cập nhật
                fetchIdGames();
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };

    // Hàm xử lý khi người dùng chọn "Từ chối"
    const handleReject = (id) => {
        // Gửi yêu cầu cập nhật status thành "Từ chối" lên server
        axios.put(`http://localhost:5000/api/idgames/${id}`, { status: 'Từ chối' })
            .then(response => {
                // Xử lý phản hồi từ server (nếu cần)
                window.alert('Thành công')
                // Tải lại danh sách ID games sau khi cập nhật
                fetchIdGames();
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };
    const fetchWithdrawBanks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/withdrawbanks');
            setWithdrawBanks(response.data.map(formatData)); // Format data before setting
        } catch (error) {
            console.error('Error fetching withdraw banks:', error);
        }
    };
    const handleReportButtonClick = (reportId) => {
        if (!mongoose.Types.ObjectId.isValid(reportId)) {
            console.error('Invalid reportId:', reportId);
            return;
        }

        setSelectedReportId(reportId);
        setShowReportForm(true);
    };

    const formatData = (withdrawBank) => {
        // Format amount to VND
        const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(withdrawBank.amount);

        // Format time to dd/MM/yyyy HH:mm:ss
        const formattedTime = new Date(withdrawBank.time).toLocaleString('vi-VN');

        return { ...withdrawBank, amount: formattedAmount, time: formattedTime };
    };
    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
        navigate('/');
    };

    const handleMenuClick = (text) => {
        setContent(text);
    };

    const handleSaveMessage = async () => {
        try {
            // Gửi yêu cầu POST đến API endpoint với nội dung text
            await axios.post('http://localhost:5000/api/saveMessage', { text: inputValue });
            setInputValue(''); // Reset giá trị của input
            window.alert('Tạo thông báo thành công');
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    const handleReportSubmit = async (reportId, reportText) => {
        if (!mongoose.Types.ObjectId.isValid(reportId)) {
            console.error('Invalid reportId:', reportId);
            return;
        }

        try {
            await axios.put(`http://localhost:5000/api/supports/${reportId}`, { status: reportText });
            fetchReports();
            window.alert('Gửi phản hồi thành công');
        } catch (error) {
            console.error('Error submitting report:', error);
        }
        setShowReportForm(false);
    };

    const handleDeleteMessage = async (messageId) => {
        try {
            // Gửi yêu cầu DELETE đến API endpoint để xóa thông báo với id tương ứng
            await axios.delete(`http://localhost:5000/api/messages/${messageId}`);
            // Cập nhật lại danh sách thông báo từ máy chủ
            fetchMessages();
            window.alert('Xóa thông báo thành công');
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };
    return (
        <div className="home-container">
            <div className="sidebar">
                <div class="menu-item" onClick={() => handleMenuClick('Duyệt ID Game')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                    Duyệt ID Game
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('Tạo Thông Báo')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    Tạo Thông Báo
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('Cập Nhật Link Game')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                    </svg>
                    Cập Nhật Link Game
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('Danh sách người dùng rút tiền')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                    </svg>
                    Người dùng rút tiền
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('Báo cáo từ người dùng')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
                    </svg>
                    Báo cáo
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('Thống kê')}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                    </svg>
                    Thống kê
                </div>
                <div className="menu-item logout" onClick={handleLogout}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    Đăng xuất
                </div>
            </div>
            <div className="content">
                {content === 'Tạo Thông Báo' && (
                    <div>
                        <div style={{ backgroundColor: '#28282d', marginTop: '45px', height: '35vh', borderRadius: '10px' }}>
                            <p>Vui lòng nhập thông báo</p>
                            <input
                                type="text"
                                placeholder="Nhập thông báo"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button onClick={handleSaveMessage}>Xác nhận</button>
                            {message && <p>{message}</p>}
                        </div>
                        <div style={{ backgroundColor: 'rgb(40, 40, 45)', height: '500px', borderRadius: '10px' }}>
                            <p>Danh sách thông báo</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Thông báo</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map((message, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'center', width: '8%' }}>{index + 1}</td>
                                            <td style={{ paddingLeft: '80px' }}>{message.text}</td>
                                            <td style={{ textAlign: 'center', width: '8%', cursor: 'pointer' }}>
                                                <svg onClick={() => handleDeleteMessage(message._id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {content === 'Báo cáo từ người dùng' && (
                    <div>
                        <div style={{ backgroundColor: 'rgb(40, 40, 45)', borderRadius: '10px', height: '100vh' }}>
                            <p>Danh sách báo cáo từ người dùng</p>
                            {showReportForm && <ReportForm onReportSubmit={handleReportSubmit} reportId={selectedReportId} />}
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Username</th>
                                        <th>Vấn đề hỗ trợ</th>
                                        <th>Mô tả</th>
                                        <th>Trạng thái</th>
                                        <th>Phản hồi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Duyệt qua mảng báo cáo để hiển thị */}
                                    {reports.map((report, index) => {
                                        if (report.status === 'Đang chờ phản hồi') {
                                            return (
                                                <tr key={index}>
                                                    <td style={{ textAlign: 'center', width: '8%' }}>{index + 1}</td>
                                                    <td>{report.username}</td>
                                                    <td>{report.supportButton}</td>
                                                    <td>{report.issueText}</td>
                                                    <td>{report.status}</td>
                                                    <td style={{ cursor: 'pointer' }} onClick={() => handleReportButtonClick(report._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                            <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
                                                        </svg>
                                                    </td>
                                                </tr>
                                            );
                                        } else {
                                            return null; // Bỏ qua nếu trạng thái không phải 'Đang chờ phản hồi'
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* Hiển thị form nếu showReportForm là true */}
                    </div>
                )}
                {content === 'Danh sách người dùng rút tiền' && (
                    <div>
                        <div style={{ backgroundColor: 'rgb(40, 40, 45)', height: '100vh', borderRadius: '10px' }}>
                            <p>Danh sách game</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Username</th>
                                        <th>Số tài khoản</th>
                                        <th>Tên ngân hàng</th>
                                        <th>Tên tài khoản</th>
                                        <th>Số tiền</th>
                                        <th>Thời gian</th>
                                        <th>Trạng thái</th>
                                        <th>Thành công</th>
                                        <th>Thất bại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {withdrawBanks.map((withdrawBank, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'center', width: '8%' }}>{index + 1}</td>
                                            <td style={{ textAlign: 'center' }}>{withdrawBank.username}</td>
                                            <td>{withdrawBank.accountNumber}</td>
                                            <td>{withdrawBank.bankName}</td>
                                            <td>{withdrawBank.accountName}</td>
                                            <td>{withdrawBank.amount}</td>
                                            <td>{withdrawBank.time}</td>
                                            <td>{withdrawBank.status}</td>
                                            <td style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                                </svg>
                                            </td>
                                            <td style={{ cursor: 'pointer' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {content === 'Duyệt ID Game' && (
                    <div>
                        <div style={{ backgroundColor: 'rgb(40, 40, 45)', height: '100vh', borderRadius: '10px' }}>
                            <p>Danh sách ID Game</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Username</th>
                                        <th>Tên game</th>
                                        <th>ID</th>
                                        <th>Trạng thái</th>
                                        <th>Thành công</th>
                                        <th>Từ chối</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {idGames
                                        .filter(game => game.status === 'Đang duyệt')
                                        .map((game, index) => (
                                            <tr key={index}>
                                                <td style={{ textAlign: 'center', width: '8%' }}>{index + 1}</td>
                                                <td style={{ textAlign: 'center' }}>{game.username}</td>
                                                <td>{game.gameName}</td>
                                                <td>{game.id}</td>
                                                <td>{game.status}</td>
                                                <td style={{ cursor: 'pointer' }} onClick={() => handleSuccess(game._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                                    </svg>
                                                </td>
                                                <td style={{ cursor: 'pointer' }} onClick={() => handleReject(game._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                                    </svg>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}




                {/* link game */}


                {content === 'Cập Nhật Link Game' && (
                    <div>
                        <div style={{ backgroundColor: '#28282d', marginTop: '45px', height: '55vh', borderRadius: '10px' }}>
                            <p>Thêm game mới</p>
                            <input
                                type="text"
                                placeholder="Nhập tên game"
                                value={gameName}
                                onChange={(e) => setGameName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Nhập link game"
                                value={gameLink}
                                onChange={(e) => setGameLink(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Nhập số tiền"
                                value={money}
                                onChange={(e) => setMoney(e.target.value)}
                            />
                            <button onClick={handleSaveGame}>Xác nhận</button>
                            {message && <p>{message}</p>}
                        </div>
                        <div style={{ backgroundColor: 'rgb(40, 40, 45)', height: '500px', borderRadius: '10px' }}>
                            <p>Danh sách game</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên game</th>
                                        <th>Link Game</th>
                                        <th>Số tiền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {games.map((game, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'center', width: '8%' }}>{index + 1}</td>
                                            <td style={{ textAlign: 'center' }}>{game.gameName}</td>
                                            <td>{game.gameLink}</td>
                                            <td>{game.money}</td>
                                            <td style={{ cursor: 'pointer' }} onClick={() => handleDeleteGame(game._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Home;
