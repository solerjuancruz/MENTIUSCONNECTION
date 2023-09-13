import React from 'react';
import axios from 'axios';

export default function Almuerzo({ fetchTimeCardsData, updateSelectedCard }) {
  const handleClick = () => {
    const url = 'http://127.0.0.1:8000/api/inicioalmuerzo/9';
    const requestData = {
      // ... tus datos aquí ...
    };

    axios.put(url, requestData)
      .then(response => {
        console.log('Respuesta:', response.data);
        fetchTimeCardsData();
        updateSelectedCard(null);
      })
      .catch(error => {
        console.error('Error:', error);
        // Maneja el error, si es necesario
      });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      Almuerzo
    </div>
  );
}
