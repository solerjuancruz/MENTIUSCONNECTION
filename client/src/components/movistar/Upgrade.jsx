import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import UpgradeDigital from "./upgradeDigital/UpgradeDigitalCreate.jsx";
import UpgradeInbound from "./upgradeInbound/UpgradeInboundCreate.jsx";
import UpgradeTeleventa from "./upgradeTeleventas/UpgradeTeleventaCreate.jsx";


export default function Upgrade() {
  const [showUpgradeDigital, setShowUpgradeDigital] = useState(false);
  const [showUpgradeInbound, setShowUpgradeInbound] = useState(false);
  const [showUpgradeTeleventa, setShowUpgradeTeleventa] = useState(false);
  const resultadoUpgradeRef = useRef(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // -1 indicates no card selected

  const handleUpgradeDigitalClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowUpgradeDigital(true);
      setShowUpgradeInbound(false);
      setShowUpgradeTeleventa(false);
      animateCards("item-card-general-titles", 0); // Set selected card index to 2
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseUpgradeDigital = () => {
    setShowUpgradeDigital(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleUpgradeInbound = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowUpgradeInbound(true);
      setShowUpgradeDigital(false);
      setShowUpgradeTeleventa(false);
      animateCards("item-card-general-titles", 1); // Set selected card index to 0
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseUpgradeInbound = () => {
    setShowUpgradeInbound(false);
    resetCardsPosition();
    resetContainer();
  };

  const handleUpgradeTeleventasClick = () => {
    transitionCardOut();
    setTimeout(() => {
      transitionCardOpen();
      setShowUpgradeTeleventa(true);
      setShowUpgradeDigital(false);
      setShowUpgradeInbound(false);
      animateCards("item-card-general-titles", 2); // Set selected card index to 1
      animateContainer("container-card-general-efect");
    }, 500);
  };

  const handleCloseUpgradeTeleventas = () => {
    setShowUpgradeTeleventa(false);
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
      <h1>up Grade</h1>
      <div className="container-card-general">
        <div className="item-card-general" onClick={handleUpgradeDigitalClick}>
          Digital
        </div>
        <div className="item-card-general" onClick={handleUpgradeInbound}>
          Inbound
        </div>
        <div className="item-card-general" onClick={handleUpgradeTeleventasClick}>
          Televentas
        </div>
      </div>
      <div className="resultadoOneToOne" ref={resultadoUpgradeRef}>
        {showUpgradeDigital && (
          <UpgradeDigital onClose={handleCloseUpgradeDigital} />
        )}
        {showUpgradeInbound && (
          <UpgradeInbound onClose={handleCloseUpgradeInbound} />
        )}
        {showUpgradeTeleventa && (
          <UpgradeTeleventa onClose={handleCloseUpgradeTeleventas} />
        )}
      </div>
    </div>
  );
}
