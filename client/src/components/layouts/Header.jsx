import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from 'axios';

export const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Llama a la función fetchData al principio para obtener los datos iniciales
    const interval = setInterval(fetchData, 60000); // Llama a fetchData cada minuto (60000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  const fetchData = () => {
    axios.get('http://127.0.0.1:8000/api/inicioturno/9')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Función para calcular la diferencia en horas y minutos entre dos momentos
  const calculateTimeDifference = (startTime) => {
    const now = new Date();
    const start = new Date();
    const [hours, minutes, seconds] = startTime.split(':');
    start.setHours(parseInt(hours, 10));
    start.setMinutes(parseInt(minutes, 10));
    start.setSeconds(parseInt(seconds, 10));
    const timeDiff = now - start;
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    return { hoursDiff, minutesDiff };
  };

  return (
    <div className="containerHeader">
      <div className="userHeader">
        <ul>
          <li>
            <h1>User</h1>
          </li>
          <li>
            <strong>Working: </strong>
            {/* Mostrar la diferencia de tiempo en horas y minutos */}
            {data.finturno ? (
              <span>{data.finturno}</span>
            ) : data.ingreso ? (
              <span>
                {calculateTimeDifference(data.ingreso).hoursDiff} hr{' '}
                {calculateTimeDifference(data.ingreso).minutesDiff} min
              </span>
            ) : (
              <span>No data</span>
            )}
          </li>
          <li>
            <strong>Almuerzo: </strong>
            {/* Mostrar el tiempo de almuerzo o el campo timelunch */}
            {data.timelunch ? (
              <span>{data.timelunch}</span>
            ) :
            data.almuerzo ? (
              <span>
                {calculateTimeDifference(data.almuerzo).hoursDiff} hr{' '}
                {calculateTimeDifference(data.almuerzo).minutesDiff} min
              </span>
            ) : (
              <span></span>
            )}
          </li>
          <li>
            <strong>Break: </strong>
            {/* Mostrar el tiempo de almuerzo o el campo timelunch */}
            { data.timebreak ? (
              <span>{data.timebreak}</span>
            ) :
            data.breakin ? (
              <span>
                {calculateTimeDifference(data.breakin).hoursDiff} hr{' '}
                {calculateTimeDifference(data.breakin).minutesDiff} min
              </span>
            ) : (
              <span></span>
            )}
          </li>
        </ul>
      </div>
      <Nav />
    </div>
  );
};
