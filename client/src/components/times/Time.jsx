import React, { useState, useEffect } from 'react';
import TimeCards from './TimeCards';
import MenuTimes from './MenuTimes';
import TimeInforme from './TimeInforme';
import TimeColaborador from './TimeColaborador';
import Mallas from './Mallas';
import gsap from 'gsap';

export default function Time() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({});
  const [selectedMenu, setSelectedMenu] = useState('cards');

  useEffect(() => {
    console.log('selectedCard changed:', selectedMenu);
    if (selectedMenu !== null) {
      transitionCardOpen();
    } else {
      transitionCardOut();
      console.log('Out');
    }
  }, [selectedMenu]);

  const transitionCardOpen = () => {
    gsap.fromTo(
      '.resultadoTime',
      {
        scale: 0.1,
        duration: 1,
        opacity: 0,
        stagger: 0.07,
      },
      {
        x: '0%',
        opacity: 1,
        scale: 1,
      }
    );

    // Animar las tarjetas solo si la opción "cards" está seleccionada
    if (selectedMenu === 'cards') {
      const cardTimes = document.querySelectorAll('.card_time');
      gsap.fromTo(
        cardTimes,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          stagger: 0.07,
          ease: 'power2.out',
        }
      );
    }
  };

  const transitionCardOut = () => {
    gsap.to('.resultadoTime', {
      duration: 1,
      scale: 0.5,
      x: '200%',
      opacity: 0,
      stagger: 0.07,
    });
  };

  const handleSubmit = async (event, cardName) => {
    event.preventDefault();
    if (selectedCard !== null) {
      // Crear el input hidden con la hora actual en el value y agregarlo a formData
      const currentTime = new Date().toLocaleTimeString();
      const newFormData = { ...formData, [cardName]: currentTime };
      setFormData(newFormData);

      await someAsyncAction();

      setSelectedCard(null); // Reiniciar la tarjeta seleccionada después de submit
      setFormData({}); // Reiniciar el formData después de submit
    }
  };

  const someAsyncAction = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  const handleMenuChange = (menu) => {
    // Solo si el menú seleccionado es diferente al actual
    if (selectedMenu !== menu) {
      setSelectedMenu(menu);
      setSelectedCard(null); // Reiniciar la tarjeta seleccionada al cambiar de menú
      transitionCardOut(); // Agregar esta línea para asegurar que se realice la transición al cambiar de menú.
    }
  };

  return (
    <div className="container_times">
      <h1>Times</h1>
      <MenuTimes handleMenuChange={handleMenuChange} />
      {selectedMenu === 'cards' && (
        <TimeCards
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      )}
      {selectedMenu === 'general' && <TimeInforme />}
      {selectedMenu === 'colaborador' && <TimeColaborador />}
      {selectedMenu === 'mallas' && <Mallas />}
    </div>
  );
}
