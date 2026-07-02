import React, { useState } from 'react';
import Booking from './Booking';

import studioA from '../assets/studio_a.png';
import studioB from '../assets/studio_b.png';

const Studios = ({ activeBooking, setActiveBooking }) => {
    return (
        <section id="studios" className="section">
            <div className="section-header">
                <h2>Our Studios</h2>
                <p>Designed for creators, professionals, and everyone in between.</p>
            </div>
            
            <div className="studio-grid">
                {/* Studio A */}
                <div className="studio-card">
                    <div className="studio-image">
                        <img src={studioA} alt="Studio A" />
                    </div>
                    <div className="studio-info">
                        <h3>Studio A</h3>
                        <p className="setup-badge">2 Person Setup</p>
                        
                        <div className="equipment-details" style={{ margin: '12px 0', padding: '15px', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                            <h4 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>Video Preview & Equipment</h4>
                            <ul className="equip-list" style={{ margin: '0 0 10px 0' }}>
                                <li style={{ marginBottom: '8px', fontSize: '0.9rem' }}><i className="fa-solid fa-microphone"></i> 4x Shure SM7B</li>
                                <li style={{ marginBottom: '8px', fontSize: '0.9rem' }}><i className="fa-solid fa-camera"></i> 3x Sony Cameras</li>
                                <li style={{ fontSize: '0.9rem' }}><i className="fa-solid fa-tv"></i> LED Wall Backdrop</li>
                            </ul>
                            <button className="btn btn-sm btn-outline w-100" style={{ padding: '6px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                Watch Preview <i className="fa-solid fa-play"></i>
                            </button>
                        </div>

                        <div className="price-row">
                            <span className="price">₹999 <span className="unit">/ Hour</span></span>
                            <button onClick={() => setActiveBooking('Studio A')} className="btn btn-primary btn-sm">Book Now</button>
                        </div>
                    </div>
                </div>

                {/* Studio B */}
                <div className="studio-card">
                    <div className="studio-image">
                        <img src={studioB} alt="Studio B" />
                    </div>
                    <div className="studio-info">
                        <h3>Studio B</h3>
                        <p className="setup-badge">4 Person Setup</p>

                        <div className="equipment-details" style={{ margin: '12px 0', padding: '15px', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                            <h4 style={{ marginBottom: '10px', fontSize: '1.05rem' }}>Video Preview & Equipment</h4>
                            <ul className="equip-list" style={{ margin: '0 0 10px 0' }}>
                                <li style={{ marginBottom: '8px', fontSize: '0.9rem' }}><i className="fa-solid fa-microphone"></i> 4x Shure SM7B</li>
                                <li style={{ marginBottom: '8px', fontSize: '0.9rem' }}><i className="fa-solid fa-camera"></i> 3x Sony Cameras</li>
                                <li style={{ fontSize: '0.9rem' }}><i className="fa-solid fa-tv"></i> LED Wall Backdrop</li>
                            </ul>
                            <button className="btn btn-sm btn-outline w-100" style={{ padding: '6px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                                Watch Preview <i className="fa-solid fa-play"></i>
                            </button>
                        </div>

                        <div className="price-row">
                            <span className="price">₹1499 <span className="unit">/ Hour</span></span>
                            <button onClick={() => setActiveBooking('Studio B')} className="btn btn-primary btn-sm">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {activeBooking && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, backdropFilter: 'blur(5px)' }}>
                    <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', width: '90%', maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <button onClick={() => setActiveBooking(null)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '5px' }}>Book Your Session</h2>
                            <p style={{ color: '#64748b' }}>Complete your booking for {activeBooking}.</p>
                        </div>
                        <Booking preselectedStudio={activeBooking} onCancel={() => setActiveBooking(null)} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Studios;
