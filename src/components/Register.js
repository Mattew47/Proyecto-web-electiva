import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && email && password) {
      console.log("Usuario:", usuario);
      console.log("Email:", email);
      console.log("Contraseña:", password);
      alert('Registro exitoso');
      // Aquí agregar la lógica para enviar los datos al backend o a tu API
    } else {
      alert('Por favor completa todos los campos.');
    }
    navigate('/trips');
    
  };

  return (
    <div className="background">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Regístrate</h2>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="fas fa-lock"></i>
          </div>
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

export default Register;