import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import CreateOneToOne from './CreateOneToOne';
import StacksColaborador from './StacksColaborador';
import DashboardOneToOne from './DashboardOneToOne';

export default function OneToOne() {
  const [showColaborador, setShowColaborador] = useState(false);
  const [showCreateOneToOne, setShowCreateOneToOne] = useState(false);
  const [showDashboardOneToOne, setShowDashboardOneToOne] = useState(false);
  const resultadoOneToOneRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

 const handleColaboradorClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowColaborador(true);
      setShowCreateOneToOne(false);
      setShowDashboardOneToOne(false);
      animateCards('item-card-general-titles', 2); // Set selected card index to 2
      animateContainer('container-card-general-efect');
    }, 500);
  };

  const handleCloseColaborador = () => {
    setShowColaborador(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleCreateOneToOneClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowCreateOneToOne(true);
      setShowColaborador(false);
      setShowDashboardOneToOne(false);
      animateCards('item-card-general-titles', 0); // Set selected card index to 0
      animateContainer('container-card-general-efect');
    }, 500);
    
  };

  const handleCloseCreateOneToOne = () => {
    setShowCreateOneToOne(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleDashboardOneToOneClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowDashboardOneToOne(true);
      setShowColaborador(false);
      setShowCreateOneToOne(false);
      animateCards('item-card-general-titles', 1); // Set selected card index to 1
      animateContainer('container-card-general-efect');
    }, 500);
    
  };

  const handleCloseDashboardOneToOne = () => {
    setShowDashboardOneToOne(false);
    resetCardsPosition();
    resetContainer();
  };

  const animateCards = (classNameToAdd, selectedIndex) => {
    const cards = document.querySelectorAll('.item-card-general');
    cards.forEach((card, index) => {
      if (index === selectedIndex) {
        card.classList.add(classNameToAdd);
        card.classList.remove('item-card-general-sinTitle');
      } else {
        card.classList.add('item-card-general-sinTitle');
        card.classList.remove(classNameToAdd);
      }
    });
    setSelectedCardIndex(selectedIndex); // Set the selected card index
  };

  const animateContainer = (classNameToAdd) => {
    const container = document.querySelector('.container-card-general');
    if (container) {
      container.classList.add(classNameToAdd);
      container.classList.remove('container-card-general');
    }
  };

  const resetCardsPosition = () => {
    gsap.to('.item-card-general', {
      duration: 0.3,
      x: 0,
    });
  };

  const transitionCardOpen = () => {
    gsap.fromTo(
      '.resultadoOneToOne',
      {
        duration: .5,
        opacity: 0,
      },
      {
        x: '0%',
        opacity: 1,
        scale:1
      }
    );
  };

  const transitionCardOut = () => {
    gsap.to('.resultadoOneToOne', {
      duration: .5,
      scale: 0.5,
      opacity:0
    });
  };

  const resetContainer = () => {
    const container = document.querySelector('.container-card-general-efect');
    if (container) {
      container.classList.add('container-card-general');
      container.classList.remove('container-card-general-efect');
    }
  };

  return (
    <div className="containerOneToOne">
      <h1>One To One</h1>
      <div className='container-card-general'>
        <div className='item-card-general' onClick={handleCreateOneToOneClick}>
          Crear One to One
        </div>
        <div className='item-card-general' onClick={handleDashboardOneToOneClick}>
          Dashboard General
        </div>
        <div className='item-card-general' onClick={handleColaboradorClick}>
          colaborador
        </div>
      </div>
      <div className='resultadoOneToOne' ref={resultadoOneToOneRef}>
        {showColaborador && <StacksColaborador onClose={handleCloseColaborador} />}
        {showCreateOneToOne && <CreateOneToOne onClose={handleCloseCreateOneToOne} />}
        {showDashboardOneToOne && <DashboardOneToOne onClose={handleCloseDashboardOneToOne} />}
      </div>
    </div>
  );
}
