import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Break({ fetchTimeCardsData, updateSelectedCard }) {
  const [dataExists, setDataExists] = useState(false);

  useEffect(() => {
    // Realizar una solicitud GET para verificar si ya existe un dato en la URL
    const checkDataExists = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/inicioturno/9');
        setDataExists(response.data.brakin !== null); 
      } catch (error) {
        console.error('Error:', error);
        // Manejar el error, si es necesario
      }
    };

    checkDataExists();
  }, []);

  const handleClick = () => {
    if (dataExists) {
      alert('¡Acción ya concluida!');
    } else {
      const url = 'http://127.0.0.1:8000/api/iniciobreack/9';
      const requestData = {
        // ... tus datos aquí ...
      };

      axios.put(url, requestData)
        .then(response => {
          console.log('Respuesta:', response.data);

          //actualizar datos
          fetchTimeCardsData();

          //Desmontar el componente
          updateSelectedCard(null);
        })
        .catch(error => {
          console.error('Error:', error);
          // Manejar el error, si es necesario
        });
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      Break
    </div>
  );
}
