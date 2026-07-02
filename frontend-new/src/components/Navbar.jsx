import React from 'react';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <span className="wave">Wave</span>Studio
            </div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#studios">Studios</a>
                <a href="#booking">Booking</a>
                <a href="#pricing">Pricing</a>
                <a href="#equipment">Equipment</a>
                <a href="#gallery">Gallery</a>
                <a href="#services">Services</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <a href="#booking" className="btn btn-primary">Book Now</a>
        </header>
    );
};

export default Navbar;
