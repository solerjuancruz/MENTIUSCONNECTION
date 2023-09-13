import React, { useState } from 'react';

export default function Malla({ mallaData, onChange }) {
  const [formData, setFormData] = useState(mallaData);

  const handleChange = (event, day, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [day]: {
        ...prevFormData[day],
        [field]: event.target.value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar los datos del formulario como desees
    console.log(formData);
    onChange(formData);
  };

  return (
    <div className='formMallas'>
      <form onSubmit={handleSubmit}>
        <h2>Horarios por día de la semana</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inicio</td>
              {Object.keys(formData).map((day) => (
                <td key={day}>
                  <input
                    type='time'
                    value={formData[day].inicio}
                    onChange={(e) => handleChange(e, day, 'inicio')}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Fin</td>
              {Object.keys(formData).map((day) => (
                <td key={day}>
                  <input
                    type='time'
                    value={formData[day].fin}
                    onChange={(e) => handleChange(e, day, 'fin')}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Break</td>
              {Object.keys(formData).map((day) => (
                <td key={day}>
                  <input
                    type='time'
                    value={formData[day].break}
                    onChange={(e) => handleChange(e, day, 'break')}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td>Almuerzo</td>
              {Object.keys(formData).map((day) => (
                <td key={day}>
                  <input
                    type='time'
                    value={formData[day].almuerzo}
                    onChange={(e) => handleChange(e, day, 'almuerzo')}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <button type="submit">Guardar horarios</button>
      </form>
    </div>
  );
}
