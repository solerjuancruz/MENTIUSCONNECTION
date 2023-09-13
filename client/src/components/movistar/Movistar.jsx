import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export const Movistar = () => {
  const animateCardsFalling = () => {
    const cards = document.querySelectorAll('.item-card-general');

    gsap.to(cards, {
      y: '100%',
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
    });
  };

  const handleClick = (route) => (event) => {
    event.preventDefault();
    animateCardsFalling();
    setTimeout(() => {
      window.location.href = route;
    }, 2000);
  };

  return (
    <div className='containerMovistar'>
      <h1>Movistar</h1>
      <div className='container-card-general'>
        <div className='item-card-general'>
          <Link to='/portabilidad' onClick={handleClick('/portabilidad')}>
            Portabilidad
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/upgrade' onClick={handleClick('/upgrade')}>
            Upgrade
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/prepost' onClick={handleClick('/prepost')}>
            Prepost
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/fija' onClick={handleClick('/fija')}>
            Fija
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/linea-nueva' onClick={handleClick('/linea-nueva')}>
            Linea Nueva
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/phoenix' onClick={handleClick('/phoenix')}>
            Phoenix
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/rechazos' onClick={handleClick('/rechazos')}>
            Rechazos
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/cobertura' onClick={handleClick('/cobertura')}>
            Cobertura
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/alto-riesgo' onClick={handleClick('/alto-riesgo')}>
            Alto Riesgo
          </Link>
        </div>
        <div className='item-card-general'>
          <Link to='/new-plan' onClick={handleClick('/new-plan')}>
            Agregar Nuevo Plan
          </Link>
        </div>
      </div>
    </div>
  );
};
