import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar el inicio de sesión aquí  
    navigate('/trips');  
    console.log('Login:', { email, password });
  };

  return (

    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="usuario" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <i className="fa fa-user icon"></i>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <i className="fa fa-lock icon"></i>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <a href="/forgot-password">Perdiste la contraseña?</a>
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
          <p>No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </form>
      </div>
    </div>
    
  );
};

export default Login;