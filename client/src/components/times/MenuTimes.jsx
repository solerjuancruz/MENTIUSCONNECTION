import React from 'react';

export default function MenuTimes({ handleMenuChange }) {
  return (
    <div className='menuTimes'>
        <ul>
            <li onClick={() => handleMenuChange('cards')}>
                Actividades
            </li>
            <li onClick={() => handleMenuChange('general')}>
                Informe General
            </li>
            <li onClick={() => handleMenuChange('colaborador')}>
                Informe Colaborador
            </li>
            <li onClick={() => handleMenuChange('mallas')}>
                Mallas
            </li>
        </ul>   
    </div>
  )
}
