import React, { useState } from 'react';

const Booking = ({ preselectedStudio = 'Studio A', onCancel }) => {
    const [studio, setStudio] = useState(preselectedStudio);
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
        <div className="booking-container" style={{ maxWidth: '100%', padding: '20px 0' }}>
            {/* Booking Steps UI */}
            <div className="booking-steps" style={{ marginBottom: '30px' }}>
                <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
                    <div className="step-icon" style={{ width: '40px', height: '40px', fontSize: '1rem' }}><i className="fa-solid fa-door-open"></i></div>
                    <span style={{ fontSize: '0.8rem' }}>Studio</span>
                </div>
                <div className="step-connector" style={{ margin: '0 5px' }}></div>
                <div className={`step ${date ? 'active' : ''}`}>
                    <div className="step-icon" style={{ width: '40px', height: '40px', fontSize: '1rem' }}><i className="fa-solid fa-calendar-days"></i></div>
                    <span style={{ fontSize: '0.8rem' }}>Date</span>
                </div>
                <div className="step-connector" style={{ margin: '0 5px' }}></div>
                <div className={`step ${time ? 'active' : ''}`}>
                    <div className="step-icon" style={{ width: '40px', height: '40px', fontSize: '1rem' }}><i className="fa-solid fa-clock"></i></div>
                    <span style={{ fontSize: '0.8rem' }}>Time</span>
                </div>
                <div className="step-connector" style={{ margin: '0 5px' }}></div>
                <div className={`step ${activeStep === 5 ? 'active' : ''}`}>
                    <div className="step-icon" style={{ width: '40px', height: '40px', fontSize: '1rem' }}><i className="fa-solid fa-check"></i></div>
                    <span style={{ fontSize: '0.8rem' }}>Done</span>
                </div>
            </div>

            {/* Booking Form */}
            <form id="booking-form" className="booking-card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Selected Studio</label>
                    <select value={studio} onChange={(e) => setStudio(e.target.value)} required style={{ cursor: 'pointer' }}>
                        <option value="Studio A">Studio A - 2 Person Setup</option>
                        <option value="Studio B">Studio B - 4 Person Setup</option>
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
                <div style={{ display: 'flex', gap: '10px' }}>
                    {onCancel && (
                        <button type="button" className="btn btn-secondary w-100" onClick={onCancel}>Cancel</button>
                    )}
                    <button type="submit" className="btn btn-primary w-100">Book Now</button>
                </div>
                {message && <div id="booking-msg" className={msgClass}>{message}</div>}
            </form>
        </div>
    );
};

export default Booking;
