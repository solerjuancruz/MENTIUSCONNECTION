import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Break from './cards/Break';
import Almuerzo from './cards/Almuerzo';
import Bano from './cards/Bano';
import Calamidad from './cards/Calamidad';
import Capacitacion from './cards/Capacitacion';
import Dano from './cards/Dano';
import EmeMedica from './cards/EmeMedica';
import Evaluacion from './cards/Evaluacion';
import Pausas from './cards/Pausas';
import Reunion from './cards/Reunion';
import Retroalimentacion from './cards/Retroalimentacion';


export default function TimeCards({ selectedCard, setSelectedCard, handleSubmit, formData }) {
  const [cardsData, setCardsData] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const fetchTimeCardsData = () => {
    axios.get('http://127.0.0.1:8000/api/inicioturno/9')
      .then(response => {
        setCardsData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  };

  useEffect(() => {
    fetchTimeCardsData();
  }, []);

  const updateSelectedCard = (newSelectedCard) => {
    setSelectedCard(newSelectedCard);
  };

  const handleClick = (event, cardInfo) => {
    event.preventDefault();

    const selectedCardData = cardsData[cardInfo.dataKey];

    if (selectedCardData && selectedCardData.name === "almuerzo" && selectedCardData.timesAction !== "") {
      setSelectedCard(null);
      setSelectedComponent(null);
    } else {
      setSelectedCard(cardInfo.dataKey);
      setSelectedComponent(cardInfo.component);
    }
    fetchTimeCardsData();
  };
  
console.log(cardsData)

const titlesCards = [
  { key: 'breakin', title: 'Break', dataKey: 'breakin', timeDataKey: 'timebreak', component:  <Break fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard} />},
  { key: 'almuerzo', title: 'Almuerzo', dataKey: 'almuerzo', timeDataKey: 'timelunch', component: <Almuerzo fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'capacitacion', title: 'Capacitación', dataKey:'capacitacion', timeDataKey: 'timecap', component: <Capacitacion fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'pausas', title: 'Pausas Activas', dataKey: 'pausas', timeDataKey: 'timepausas', component: <Pausas fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'dano', title: 'Daño Técnico', dataKey: 'daño', timeDataKey: 'timedaño', component: <Dano fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'evaluacion', title: 'Evaluación', dataKey: 'evaluacion', timeDataKey: 'timeeva', component: <Evaluacion fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'retro', title: 'Retroalimentación', dataKey: 'retro', timeDataKey: 'timeretro', component: <Retroalimentacion fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'reunion', title: 'Reunión', dataKey: 'reunion', timeDataKey: 'timereunion', component: <Reunion fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'bano', title: 'Baño', dataKey: 'baño', timeDataKey: 'timebaño', component: <Bano fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'calamidad', title: 'Calamidad', dataKey: 'calamidad', timeDataKey: 'timecalamidad', component: <Calamidad fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>},
  { key: 'EmeMedica', title: 'EmeMedica', dataKey: 'EmeMedica', timeDataKey: 'timeEmeMedica', component: <EmeMedica fetchTimeCardsData={fetchTimeCardsData} updateSelectedCard={updateSelectedCard}/>}
];


return (
  <div className='resultadoTime'>
    <div className="container_cards_times">
      {titlesCards.map((cardInfo) => (
        <div
          key={cardInfo.key}
          className={`card_time ${
            selectedCard === cardInfo.dataKey ? "selected" : ""
          } ${
            cardsData[cardInfo.dataKey]?.name === "almuerzo" && cardsData[cardInfo.dataKey]?.timesAction !== ""
              ? "disabled"
              : ""
          } ${
            cardsData[cardInfo.timeDataKey] !== null ? "outActive" : ""
          }`}
          onClick={(event) => handleClick(event, cardInfo)}
        >
          <h3>{cardInfo.title}</h3>
          {selectedCard === cardInfo.dataKey ? (
            <div className="selected-card-component">
              {selectedComponent}
            </div>
          ) : (
            <>
              <p className="timesAction">
                {cardsData[cardInfo.dataKey]}
              </p>
              <p className='timesAction'>
                {cardsData[cardInfo.timeDataKey]}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);


}