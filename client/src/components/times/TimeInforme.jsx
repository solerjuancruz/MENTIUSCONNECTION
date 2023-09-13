import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function TimeInforme() {

    const data = {
      labels: ['Retardos', 'Almuerzo', 'Breack', 'Pausas Activas', 'Horas seman', 'Horas mes'],
      datasets: [{
        type: 'line',
        label: 'My Team this month',
        data: [11, 16, 7, 3, 14, 40],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'rgb(34, 182, 275)'
        ]
      }],
    };
  

  return (
    <div className='resultadoTime'>
    
  <div className='chartTime'>
    <Bar data={data} />
  </div>
    
    </div>
  )
}
