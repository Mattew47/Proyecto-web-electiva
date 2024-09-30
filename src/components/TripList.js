import React, { useState, useEffect } from 'react';
import './TripList.css';

const TripList = () => {
  // Definir el estado inicial con algunos viajes
  const [trips, setTrips] = useState([
    { id: 1, name: '💶 Viaje a Madrid' },
    { id: 2, name: '✈️ Viaje a Barcelona' },
    { id: 3, name: '💶 Viaje a Francia' },
    { id: 4, name: '✈️ Viaje a Honduras' },
  ]);

  // Estado para la hora
  const [horaActual, setHoraActual] = useState(new Date());

  // Lista de emojis a elegir
  const emojis = ['✈️', '💶'];

  // Función para actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000); // Actualiza cada segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  // Función para agregar un nuevo viaje
  const agregarViaje = () => {
    const nuevoViaje = prompt('Introduce el nombre del nuevo viaje:');
    if (nuevoViaje) {
      const nuevoId = trips.length + 1;
      const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)]; // Seleccionar un emoji aleatorio
      setTrips([...trips, { id: nuevoId, name: `${emojiAleatorio} ${nuevoViaje}` }]);
    }
  };

  // Función para eliminar un viaje
  const eliminarViaje = (id) => {
    const viajesActualizados = trips.filter(trip => trip.id !== id);
    setTrips(viajesActualizados);
  };

  // Formatear la hora actual
  const formatearHora = (fecha) => {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div className="container">
      <div className="header">
        {/* Mostrar la hora actual */}
        <span className="time">{formatearHora(horaActual)}</span>
        <span className="icons">📶 🔋</span>
      </div>

      <div className="title">
        <h1>Lista de viajes</h1>
      </div>

      {/* Renderizar dinámicamente los viajes desde el estado */}
      <div className="tricount-list">
        {trips.map((trip) => (
          <div className="tricount-item" key={trip.id}>
            <span className="label">{trip.name}</span>
            {/* Botón para eliminar el viaje */}
            <button className="delete-trip" onClick={() => eliminarViaje(trip.id)}>
              ❌ Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="footer">
        {/* Botón para añadir un nuevo viaje */}
        <button className="add-tricount" onClick={agregarViaje}>
          + Añadir un Viaje
        </button>

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
