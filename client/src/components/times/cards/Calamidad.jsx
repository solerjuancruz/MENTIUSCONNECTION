import React from 'react';
import axios from 'axios';

export default function Calamidad({ fetchTimeCardsData, updateSelectedCard }) {
  const handleClick = () => {
    const url = 'http://127.0.0.1:8000/api/iniciocalamidad/9';

    // Datos que deseas enviar en la solicitud PUT (puedes modificar esto según tus necesidades)
    const requestData = {
      // ... tus datos aquí ...
    };

    // Realizar la solicitud PUT utilizando Axios
    axios.put(url, requestData)
      .then(response => {
        console.log('Respuesta:', response.data);
        fetchTimeCardsData();
        updateSelectedCard(null);
      })
      .catch(error => {
        console.error('Error:', error);
        // Manejar el error, si es necesario
      });
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      Calamidad
    </div>
  );
}
