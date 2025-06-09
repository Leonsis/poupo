import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilo/Login.css';
import imgLogin from '../img/img-login.png';

const Login = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('12345');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password });
    navigate('/poupo');
  };

  return (
    <div className="login-container">
        <div className="login-box">
            <h1>Bem-vindo ao Poupo</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" required />
                </div>
                <button type="submit" className="login-button">
                    Entrar
                </button>
            </form>
            <p className="signup-link">
                Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
            </p>
        </div>
        
        <div className='img' style={{ width: "40%" }}>
            <img src={imgLogin}  className="img-fluid" alt="" />
        </div>
        
    </div>
  );
};

export default Login;