import React, { useState, useRef } from "react";
import { gsap } from 'gsap';

import PrepostDigitalCreate from "./prepostDigital/PrepostDigitalCreate.jsx";
import PrepostInboundCreate from "./prepostInbound/PrepostInboundCreate.jsx";
import PrepostTeleventasCreate from "./prepostTeleventa/PrepostTeleventasCreate.jsx"


export default function Prepost() {
  const [showPrepostDigital, setShowPrepostDigital] = useState(false);
  const [showPrepostInbound, setShowPrepostInbound] = useState(false);
  const [showPrepostTeleventa, setShowPrepostTeleventa] = useState(false);
  const resultadoPrepostRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

  const handlePrepostDigitalClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPrepostDigital(true);
      setShowPrepostInbound(false);
      setShowPrepostTeleventa(false);
      animateCards("item-card-general-titles", 0); // Set selected card index to 2
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePrepostDigital = () => {
    setShowPrepostDigital(false);
    resetCardsPosition();
    resetContainer();
  };

  const handlePrepostInbound = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPrepostInbound(true);
      setShowPrepostDigital(false);
      setShowPrepostTeleventa(false);
      animateCards("item-card-general-titles", 1); // Set selected card index to 0
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePrepostInbound = () => {
    setShowPrepostInbound(false);
    resetCardsPosition();
    resetContainer();
  };

  const handlePrepostTeleventasClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPrepostTeleventa(true);
      setShowPrepostDigital(false);
      setShowPrepostInbound(false);
      animateCards("item-card-general-titles", 2); // Set selected card index to 1
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePrepostTeleventas = () => {
    setShowPrepostTeleventa(false);
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
      <h1>Prepost</h1>
      <div className="container-card-general">
        <div className="item-card-general" onClick={handlePrepostDigitalClick}>
         Digital
        </div>
        <div
          className="item-card-general"
          onClick={handlePrepostInbound}
        >
          Inbound
        </div>
        <div className="item-card-general" onClick={handlePrepostTeleventasClick}>
          Televentas
        </div>
      </div>
      <div className="resultadoOneToOne" ref={resultadoPrepostRef}>
        {showPrepostDigital && (
          <PrepostDigitalCreate onClose={handleClosePrepostDigital} />
        )}
        {showPrepostInbound && (
          <PrepostInboundCreate onClose={handleClosePrepostInbound} />
        )}
        {showPrepostTeleventa && (
          <PrepostTeleventasCreate onClose={handleClosePrepostTeleventas} />
        )}
      </div>
    </div>
  );
};
