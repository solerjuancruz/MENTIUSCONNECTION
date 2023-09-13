import React, { useState, useRef } from "react";
import { gsap } from "gsap";

import PortaDigitalCreate from './portabilidadDigital/PortaDigitalCreate.jsx';
import PortaInboundCreate from "./portabilidadInbound/PortaInboundCreate.jsx";
import PortaTeleventaCreate from "./portabilidadTeleventas/PortaTeleventasCreate.jsx";


export default function Portabilidad() {
  const [showPortaDigital, setShowPortaDigital] = useState(false);
  const [showPortaInbound, setShowPortaInbound] = useState(false);
  const [showPortaTeleventas, setShowPortaTeleventas] = useState(false);
  const resultadoPortabilidadRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

  const handlePortaDigitalClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPortaDigital(true);
      setShowPortaInbound(false);
      setShowPortaTeleventas(false);
      animateCards("item-card-general-titles", 0); // Set selected card index to 2
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePortaDigital = () => {
    setShowPortaDigital(false);
    resetCardsPosition();
    resetContainer();
  };

  const handlePortaInboundClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPortaInbound(true);
      setShowPortaDigital(false);
      setShowPortaTeleventas(false);
      animateCards("item-card-general-titles", 1); // Set selected card index to 0
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePortaInbound = () => {
    setShowPortaInbound(false);
    resetCardsPosition();
    resetContainer();
  };

  const handlePortaTeleventasClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPortaTeleventas(true);
      setShowPortaDigital(false);
      setShowPortaInbound(false);
      animateCards("item-card-general-titles", 2); // Set selected card index to 1
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePortaTeleventas = () => {
    setShowPortaTeleventas(false);
    resetCardsPosition();
    resetContainer();
  };

  const animateCards = (classNameToAdd, selectedIndex) => {
    const cards = document.querySelectorAll(".item-card-general");
    cards.forEach((card, index) => {
      if (index === selectedIndex) {
        card.classList.add(classNameToAdd);
        card.classList.remove("item-card-general-sinTitle");
      } else {
        card.classList.add("item-card-general-sinTitle");
        card.classList.remove(classNameToAdd);
      }
    });
    setSelectedCardIndex(selectedIndex); // Set the selected card index
  };

  const animateContainer = (classNameToAdd) => {
    const container = document.querySelector(".container-card-general");
    if (container) {
      container.classList.add(classNameToAdd);
      container.classList.remove("container-card-general");
    }
  };

  const resetCardsPosition = () => {
    gsap.to(".item-card-general", {
      duration: 0.3,
      x: 0,
    });
  };

  const transitionCardOpen = () => {
    gsap.fromTo(
      ".resultadoOneToOne",
      {
        duration: 0.5,
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        scale: 1,
      }
    );
  };

  const transitionCardOut = () => {
    gsap.to(".resultadoOneToOne", {
      duration: 0.5,
      scale: 0.5,
      opacity: 0,
    });
  };

  const resetContainer = () => {
    const container = document.querySelector(".container-card-general-efect");
    if (container) {
      container.classList.add("container-card-general");
      container.classList.remove("container-card-general-efect");
    }
  };
  
  
  return (
    <div className="containerOneToOne">
      <h1>Portabilidad</h1>
      <div className="container-card-general">
        <div className="item-card-general" onClick={handlePortaDigitalClick}>
         Digital
        </div>
        <div
          className="item-card-general"
          onClick={handlePortaInboundClick}
        >
          Inbound
        </div>
        <div className="item-card-general" onClick={handlePortaTeleventasClick}>
          Televentas
        </div>
      </div>
      <div className="resultadoOneToOne" ref={resultadoPortabilidadRef}>
        {showPortaDigital && (
          <PortaDigitalCreate onClose={handleClosePortaDigital} />
        )}
        {showPortaInbound && (
          <PortaInboundCreate onClose={handleClosePortaInbound} />
        )}
        {showPortaTeleventas && (
          <PortaTeleventaCreate onClose={handleClosePortaTeleventas} />
        )}
      </div>
    </div>
  );
}
