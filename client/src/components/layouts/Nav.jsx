import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { NavLink } from 'react-router-dom';


export default function Nav() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();
        if (isMenuOpen) {
            tl.to(".line1", 0.5, { rotate: "45", y: 5 })
                .to(".line2", 0.5, { rotate: "-45", y: -5 }, "-=0.5")
                .to(".line3", 0.5, { rotate: "-45", y: -5, opacity: 0 }, "-=0.5")
                .to("#logo", 1, { color: "black" }, "-=0.5")
                .to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" }, "-=0.5");
        } else {
            tl.to(".line1", 0.5, { rotate: "0", y: 0 })
                .to(".line2", 0.5, { rotate: "0", y: 0 }, "-=0.5")
                .to(".line3", 0.5, { rotate: "0", y: 0, opacity: 1 }, "-=0.5")
                .to("#logo", 1, { color: "white" }, "-=0.5")
                .to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" }, "-=0.5");
        }
    }, [isMenuOpen]);

    function toggleMenu() {
        setMenuOpen(prevState => !prevState);
    }

    return (
        <div className="containerNav">
            <nav className={`nav-bar ${isMenuOpen ? "active" : ""}`}>
                <ul className="nav-links">
                    <h3 id="Home" onClick={toggleMenu}>
                        <NavLink to="/home" className={({isActive})=> isActive ? "active" : ""}> Home </NavLink>
                    </h3>
                    <h3 id="Tiempos" onClick={toggleMenu}>
                        <NavLink to="/time" className={({isActive})=> isActive ? "active" : ""}> Tiempos </NavLink>
                    </h3>
                    <h3 id="Movistar" onClick={toggleMenu}>
                        <NavLink to="/movistar" className={({isActive})=> isActive ? "active" : ""}> Movistar </NavLink>
                    </h3>
                    <h3 id="one-to-one" onClick={toggleMenu}>
                        <NavLink to="/one-to-one" className={({isActive})=> isActive ? "active" : ""}>One to One</NavLink>
                    </h3>
                    <h3 id="DbMentius" onClick={toggleMenu}>
                        <NavLink to="/db-mentius" className={({isActive})=> isActive ? "active" : ""}>Db Mentius</NavLink>
                    </h3>
                </ul>
            </nav>
            <header className="nav-header">
                <div className={`burger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </header>
        </div>
    );
}
