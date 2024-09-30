import React from 'react';
import './TripList.css';

const TripList = () => {
  const trips = [
    { id: 1, name: 'Excursión a la Playa' },
    { id: 2, name: 'Cena en el Restaurante' },
  ];

  return (
    <div className="container">
      <div className="header">
        <span className="time">6:55 PM</span>
        <span className="icons">📶 🔋</span>
      </div>

      <div className="title">
        <h1>Lista de viajes</h1>
      </div>

      <div className="tricount-list">
        <div className="tricount-item">
          <span className="label">💶 Viaje a Madrid</span>
        </div>
        <div className="tricount-item">
          <span className="label">✈️ Viaje a Barcelona</span>
        </div>
        <div className="tricount-item">
          <span className="label">💶 Viaje a Francia</span>
        </div>
        <div className="tricount-item">
          <span className="label">✈️ Viaje a Honduras</span>
        </div>
      </div>

      <div className="footer">
        <button className="add-tricount">+ Añadir un Viaje</button>
        <div className="footer-buttons">
          <button>Viajes</button>
          <button>Tarjeta Gratuita</button>
          <button>Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default TripList;
