import React, { useState } from 'react';

const Booking = () => {
    const [studio, setStudio] = useState('Studio A');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [msgClass, setMsgClass] = useState('hidden');
    const [activeStep, setActiveStep] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { studio, date, time };

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            
            if (res.ok) {
                setMessage(result.message);
                setMsgClass('msg-box msg-success');
                setActiveStep(5);
                // reset form
                setStudio('Studio A');
                setDate('');
                setTime('');
            } else {
                throw new Error(result.message || 'Booking failed');
            }
        } catch (err) {
            console.error(err);
            setMessage('Error: Could not connect to the server.');
            setMsgClass('msg-box msg-error');
        }
    };

    return (
        <section id="booking" className="section dark-section">
            <div className="section-header">
                <h2>Book Your Session</h2>
                <p>Seamless booking in just a few steps.</p>
            </div>

            <div className="booking-container">
                {/* Booking Steps UI */}
                <div className="booking-steps">
                    <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
                        <div className="step-icon"><i className="fa-solid fa-door-open"></i></div>
                        <span>Studio</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`step ${date ? 'active' : ''}`}>
                        <div className="step-icon"><i className="fa-solid fa-calendar-days"></i></div>
                        <span>Date</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`step ${time ? 'active' : ''}`}>
                        <div className="step-icon"><i className="fa-solid fa-clock"></i></div>
                        <span>Time</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`step ${activeStep >= 4 ? 'active' : ''}`}>
                        <div className="step-icon"><i className="fa-solid fa-credit-card"></i></div>
                        <span>Payment</span>
                    </div>
                    <div className="step-connector"></div>
                    <div className={`step ${activeStep === 5 ? 'active' : ''}`}>
                        <div className="step-icon"><i className="fa-solid fa-check"></i></div>
                        <span>Confirmation</span>
                    </div>
                </div>

                {/* Booking Form */}
                <form id="booking-form" className="booking-card glass-panel" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Choose Studio</label>
                        <select id="b-studio" value={studio} onChange={(e) => setStudio(e.target.value)} required>
                            <option value="Studio A">Studio A (2 Person)</option>
                            <option value="Studio B">Studio B (4 Person)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Choose Date</label>
                        <input type="date" id="b-date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Choose Time</label>
                        <div className="time-slots">
                            <label className="time-slot available">
                                <input type="radio" name="time" value="09 AM" checked={time === '09 AM'} onChange={(e) => setTime(e.target.value)} required />
                                <span>09 AM</span>
                            </label>
                            <label className="time-slot available">
                                <input type="radio" name="time" value="10 AM" checked={time === '10 AM'} onChange={(e) => setTime(e.target.value)} />
                                <span>10 AM</span>
                            </label>
                            <label className="time-slot booked" title="Booked">
                                <input type="radio" name="time" value="11 AM" disabled />
                                <span>11 AM</span>
                            </label>
                            <label className="time-slot available">
                                <input type="radio" name="time" value="01 PM" checked={time === '01 PM'} onChange={(e) => setTime(e.target.value)} />
                                <span>01 PM</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Proceed to Payment</button>
                    {message && <div id="booking-msg" className={msgClass}>{message}</div>}
                </form>
            </div>
        </section>
    );
};

export default Booking;
