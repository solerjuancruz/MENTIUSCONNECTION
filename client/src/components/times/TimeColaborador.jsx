import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const colaboradores = [
  {
    name: 'Gabriel',
    primerApellido: 'Vasquez',
    segundoApellido: 'Ortiz',
    cedula: '1234567890',
    data: [11, 16, 7, 3, 14,40],
  },
  {
    name: 'Veronica',
    primerApellido: 'Ortiz',
    segundoApellido: 'Varela',
    cedula: '1010213',
    data: [17, 25, 7, 24, 14,14],
  },
  {
    name: 'Juan',
    primerApellido: 'Vasquez',
    segundoApellido: 'Lopez',
    cedula: '78945613',
    data: [24, 25, 7, 14, 39,78],
  },
];


export default function TimeColaborador() {

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const query = selectedOption.toLowerCase();

    const foundColaboradores = colaboradores.filter((colaborador) => {
      const name = colaborador.name.toLowerCase();
      const primerApellido = colaborador.primerApellido.toLowerCase();
      const segundoApellido = colaborador.segundoApellido.toLowerCase();
      const cedula = colaborador.cedula.toLowerCase();

      return (
        name.includes(query) ||
        primerApellido.includes(query) ||
        segundoApellido.includes(query) ||
        cedula.includes(query)
      );
    });

    setSearchResults(foundColaboradores);
  };

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    const foundColaborador = searchResults.find(
      (colaborador) => `${colaborador.name} ${colaborador.primerApellido}` === e.target.value
    );
    setSelectedColaborador(foundColaborador);
  };

  useEffect(() => {
    handleSearch();
  }, [selectedOption]);

  const data = {
    labels: ['Retardos', 'Almuerzo', 'Breack', 'Pausas Activas', 'Horas seman', 'Horas mes'],
    datasets: [
      {
        label:
          selectedColaborador !== null
            ? `${selectedColaborador.name} ${selectedColaborador.primerApellido}`
            : 'Resultados de búsqueda',
        data: selectedColaborador !== null ? selectedColaborador.data : [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };


  return (
    <div className='resultadoTime'>
    
    <div className='searchTime'>
        <label>Buscar colaborador:</label>
        <input type='text' value={selectedOption} onChange={handleInputChange} />
        {searchResults.length > 0 && (
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=''>Selecciona un colaborador...</option>
            {searchResults.map((colaborador, index) => (
              <option
                key={index}
                value={`${colaborador.name} ${colaborador.primerApellido}`}
                selected={
                  selectedColaborador &&
                  `${colaborador.name} ${colaborador.primerApellido}` ===
                    `${selectedColaborador.name} ${selectedColaborador.primerApellido}`
                }
              >
                {`${colaborador.name} ${colaborador.primerApellido} ${colaborador.segundoApellido} - Cédula: ${colaborador.cedula}`}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className='chartTime'>
        <Bar data={data} />
      </div>
    
    </div>
  )
}
