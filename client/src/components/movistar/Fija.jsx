import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import FijaDigitalIndex from "./fijaDigital/FijaDigitalIndex.jsx"
import FijaInboundCreate from "./fijaInbound/FijaInboundCreate.jsx";
import FijaTeleventaCreate from "./fijaTeleventa/FijaTeleventaCreate.jsx";

export default function Fija() {
  const [showFijaDigital, setShowFijaDigital] = useState(false);
  const [showFijaInbound, setShowFijaInbound] = useState(false);
  const [showFijaTeleventa, setShowFijaTeleventa] = useState(false);
  const resultadoFijaRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

  const handleFijaDigitalClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowFijaDigital(true);
      setShowFijaInbound(false);
      setShowFijaTeleventa(false);
      animateCards("item-card-general-titles", 0); // Set selected card index to 2
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseFijaDigital = () => {
    setShowFijaDigital(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleFijaInbound = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowFijaInbound(true);
      setShowFijaDigital(false);
      setShowFijaTeleventa(false);
      animateCards("item-card-general-titles", 1); // Set selected card index to 0
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseFijaInbound = () => {
    setShowFijaInbound(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleFijaTeleventasClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowFijaTeleventa(true);
      setShowFijaDigital(false);
      setShowFijaInbound(false);
      animateCards("item-card-general-titles", 2); // Set selected card index to 1
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseFijaTeleventas = () => {
    setShowFijaTeleventa(false);
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
      <h1>Fija</h1>
      <div className="container-card-general">
        <div className="item-card-general" onClick={handleFijaDigitalClick}>
         Digital
        </div>
        <div
          className="item-card-general"
          onClick={handleFijaInbound}
        >
          Inbound
        </div>
        <div className="item-card-general" onClick={handleFijaTeleventasClick}>
          Televentas
        </div>
      </div>
      <div className="resultadoOneToOne" ref={resultadoFijaRef}>
        {showFijaDigital && (
          <FijaDigitalIndex onClose={handleCloseFijaDigital} />
        )}
        {showFijaInbound && (
          <FijaInboundCreate onClose={handleCloseFijaInbound} />
        )}
        {showFijaTeleventa && (
          <FijaTeleventaCreate onClose={handleCloseFijaTeleventas} />
        )}
      </div>
    </div>
  );
}
