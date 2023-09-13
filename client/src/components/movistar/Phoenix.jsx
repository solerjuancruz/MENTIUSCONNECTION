import React, { useState, useRef } from "react";
import { gsap } from "gsap";

import PhoenixCreate from "./phoenix/PhoenixCreate.jsx";
import PhoenixPerdidaEdit from "./phoenixPerdida/PhoenixPerdidaEdit.jsx";

export default function Phoenix() {
  const [showPhoenix, setShowPhoenix] = useState(false);
  const [showPhoenixPerdidaEdit, setShowPhoenixPerdidaEdit] = useState(false);
  const resultadoPhoenixRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

  const handlePhoenixClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPhoenix(true);
      setShowPhoenixPerdidaEdit(false);
      animateCards("item-card-general-titles", 0); // Set selected card index to 2
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePhoenix = () => {
    setShowPhoenix(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleFijaInbound = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowPhoenixPerdidaEdit(true);
      setShowPhoenix(false);
      animateCards("item-card-general-titles", 1); // Set selected card index to 0
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleClosePhoenixPerdidaEdit = () => {
    setShowPhoenixPerdidaEdit(false);
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
      <h1>Phoenix</h1>
      <div className="container-card-general">
        <div className="item-card-general" onClick={handlePhoenixClick}>
          Phoenix
        </div>
        <div className="item-card-general" onClick={handleFijaInbound}>
        PhoenixPerdida
        </div>
      </div>
      <div className="resultadoOneToOne" ref={resultadoPhoenixRef}>
        {showPhoenix && <PhoenixCreate onClose={handleClosePhoenix} />}
        {showPhoenixPerdidaEdit && (
          <PhoenixPerdidaEdit onClose={handleClosePhoenixPerdidaEdit} />
        )}
      </div>
    </div>
  );
}
