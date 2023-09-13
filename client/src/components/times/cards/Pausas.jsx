import React from 'react'
import axios from 'axios';

export default function Pausas({ fetchTimeCardsData, updateSelectedCard }) {
  const handleClick = () => {
        const url = 'http://127.0.0.1:8000/api/iniciopausas/9';
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
          Pausas Activas
        </div>
      );
    }
    

