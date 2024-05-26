import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra thông tin đăng nhập (ở đây chúng ta chỉ kiểm tra đơn giản)
    if (username === 'admin' && password === 'admin') {
      // Điều hướng tới trang chủ sau khi đăng nhập thành công
      navigate('/home');
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>
        <div>
          <label>Tài khoản:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
