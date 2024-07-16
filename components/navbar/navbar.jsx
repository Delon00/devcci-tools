'use client'
import React, { useState, useEffect } from "react";
import "./navbar.css"
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

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
                <Image src="https://img.icons8.com/ios/50/search--v1.png" alt="search icon" width={15} height={15}/>
            </div>
            <div className="navlinks">
                <a className="nav-link" href="/docs">Astuces</a>
                <a className="nav-link" href="/composants">Bugs</a>
                <a className="nav-link" href="/astuces">Composants</a>
                <Image onClick={() => router.push('/login')} width="40" height="40" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="user-male-circle--v1"/>
            </div>
            <div className="hamburger"><IoMenuSharp /></div>
        </main>
    )
}