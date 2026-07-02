import React from 'react';

const Navbar = ({ setActiveBooking }) => {
    return (
        <header className="navbar">
            <div className="logo">
                <span className="wave">Wave</span>Studio
            </div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#studios">Studios</a>
                <a href="#equipment">Equipment</a>
                <a href="#gallery">Gallery</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
            <button onClick={() => setActiveBooking('Studio A')} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Book Now</button>
        </header>
    );
};

export default Navbar;
