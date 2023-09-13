import React, { useState } from 'react';
import Malla from './Malla';

export default function Mallas() {
  const colaboradores = [
    {
      name: 'Gabriel',
      primerApellido: 'Vasquez',
      segundoApellido: 'Ortiz',
      cedula: '1234567890',
      malla: [
        {
          dia: 'lunes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'martes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'miercoles',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'jueves',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'viernes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'sabado',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'domingo',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        }
      ],
    },
    {
      name: 'Veronica',
      primerApellido: 'Ortiz',
      segundoApellido: 'Varela',
      cedula: '1010213',
      malla: [
        {
          dia: 'lunes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'martes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'miercoles',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'jueves',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'viernes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'sabado',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'domingo',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        }
      ],
    },
    {
      name: 'Juan',
      primerApellido: 'Vasquez',
      segundoApellido: 'Lopez',
      cedula: '78945613',
      malla: [
        {
          dia: 'lunes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'martes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'miercoles',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'jueves',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'viernes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'sabado',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'domingo',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        }
      ],
    },
    {
      name: 'Valentina',
      primerApellido: 'Vasquez',
      segundoApellido: 'Lopez',
      cedula: '78613',
      malla: [
        {
          dia: 'lunes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'martes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'miercoles',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'jueves',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'viernes',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'sabado',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        },
        {
          dia: 'domingo',
          inicio: '',
          fin: '',
          break: '',
          almuerzo: ''
        }
      ],
    },
  ];

const [selectedColaboradores, setSelectedColaboradores] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');

  const handleColaboradorChange = (event) => {
    const selectedOptions = event.target.options;
    const selectedColaboradores = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedColaboradores.push(colaboradores[i]);
      }
    }
    setSelectedColaboradores(selectedColaboradores);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    const lines = textareaValue.trim().split('\n');
    if (lines.length !== 5) {
      alert('Asegúrate de pegar o escribir el texto completo con el formato adecuado.');
      return;
    }

    const [headers, inicio, fin, breakTime, almuerzo] = lines.map((line) => line.split('\t'));
    if (headers[0] !== 'lunes' || headers[1] !== 'martes' || headers[2] !== 'miércoles' || headers[3] !== 'jueves' || headers[4] !== 'viernes' || headers[5] !== 'sábado' || headers[6] !== 'domingo') {
      alert('El encabezado de los días no coincide con el formato esperado.');
      return;
    }

    selectedColaboradores.forEach((colaborador) => {
      colaborador.malla.forEach((dia, index) => {
        dia.inicio = inicio[index];
        dia.fin = fin[index];
        dia.break = breakTime[index];
        dia.almuerzo = almuerzo[index];
      });
    });

    console.log(selectedColaboradores); // Datos actualizados de los colaboradores
    // Aquí puedes enviar los datos a cada colaborador seleccionado al servidor o a una base de datos
  };

  return (
    <div className='resultadoTime'>
      <select multiple onChange={handleColaboradorChange}>
        {colaboradores.map((colaborador) => (
          <option key={colaborador.cedula} value={colaborador.cedula}>
            {colaborador.name} {colaborador.primerApellido} {colaborador.segundoApellido}
          </option>
        ))}
      </select>
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="Pega o escribe el texto con los horarios aquí..."
      />
    {/*   <Malla mallaData={selectedColaboradores.length > 0 ? selectedColaboradores[0].malla : []} onChange={(updatedMalla) => setSelectedColaboradores([{ ...selectedColaboradores[0], malla: updatedMalla }])} />
  */}     <button type='button' onClick={handleSubmit}>
        Guardar horarios
      </button>
    </div>
  );
}