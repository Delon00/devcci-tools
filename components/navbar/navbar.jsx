'use client'
import React, { useState, useEffect } from "react";
import "./navbar.css"

export default function Navbar(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <main className={`navbar ${isScrolled ? "scroll" : ""}`}>
            <h3 className="logo-brand">Devcci</h3>
            <div className="nav-search">
                <input className="nav-input" type="text" />
                <img width="15" height="15" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
            </div>
            <div className="navlinks">
                <a className="nav-link" href="/composant">Docs</a>
                <a className="nav-link" href="/composant">Composants</a>
                <a className="nav-link" href="/composant">Astuces</a>
            </div>
        </main>
    )
}