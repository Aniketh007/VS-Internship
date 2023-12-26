import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faClinicMedical, faPhoneAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';




function Appointment() {

    const history = useNavigate();

    const [ setSelectedMode] = useState('');

    // Function to handle mode selection
    const selectMode = (mode) => {
        setSelectedMode(mode);
        // You can add further actions based on the selected mode here
        // For instance, trigger actions related to the chosen mode
    };
    // State to track selected date
    const [slots, setSlots] = useState([]);

    const [selectedDate, setSelectedDate] = useState(null); // State to track selected date
    const [availableDates, setAvailableDates] = useState([]); // State to store available dates

    const [availableSlots, setAvailableSlots] = useState({});
    const [currentPage, setCurrentPage] = useState(0);


    const viewProfile = () => {
        history('/home');
    }
    
    const handleTimeSelection = (selectedSlot, selectedDate) => {
        if (selectedSlot) {
            history('/book', { state: { selectedTime: selectedSlot, Date: selectedDate}});
        }
    };
    
    useEffect(() => {
        const today = new Date();
        const dates = [];
        const date = new Date(today);

        const updatedAvailableSlots = {}; // Updated slots object

        for (let i = 0; i < 6; i++) {
            date.setDate(today.getDate() + i);
            const formattedDate = date.toISOString().slice(0, 10);
            dates.push(formattedDate);

            // Generate sample slots for each date (Replace with your logic)
            const sampleSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
            updatedAvailableSlots[formattedDate] = sampleSlots; // Set sample slots for each date
        }

        setAvailableDates(dates);
        setAvailableSlots(updatedAvailableSlots); // Update available slots
    }, []);

    const navigateDate = (direction) => {
        if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < Math.floor(availableDates.length / 3) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };


    const formatDate = (dateString) => {
        const targetDate = new Date(dateString);

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const dayName = days[targetDate.getDay()];
        return `${dayName}, ${targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSlots(availableSlots[date] || []); // Set the slots for the selected date or an empty array if no slots available
    };

    const [selectedSlot, setSelectedSlot] = useState(null); // State to track selected slot

    const handleSlotBooking = (slot) => {
        setSelectedSlot(slot); // Set the selected slot
        console.log(`Slot ${slot} booked on ${selectedDate}`);
    };

    const generateCalendar = () => {
        const datesToShow = availableDates.slice(currentPage * 3, currentPage * 3 + 3);

        return (
            <div>
                <h2>Select Date for Appointment:</h2>
                <div className="col-lg-12 py-2 d-flex flex-wrap justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={() => navigateDate('prev')} style={{ cursor: 'pointer', height: '25px' }} />
                    {datesToShow.map((date) => (
                        <div className="mb-4" key={date} onClick={() => handleDateSelect(date)}>
                            <h6>{formatDate(date)}</h6>
                        </div>
                    ))}
                    <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={() => navigateDate('next')} style={{ cursor: 'pointer', height: '25px' }} />
                </div>
            </div>
        );
    };

    const displaySlots = () => {
        return (
            <div>
                <div className="row row-cols-1 row-cols-md-3 mx-2">
                    {slots.map((slot, index) => (
                        <div key={index} className="col mb-4">
                            <button
                                className={`btn border-primary text-nodecoration ${selectedSlot === slot ? 'selected' : ''}`}
                                style={{
                                    width: '100%',
                                    backgroundColor: selectedSlot === slot ? 'blue' : 'white',
                                    color: selectedSlot === slot ? 'white' : 'black',
                                }}
                                onClick={() => handleSlotBooking(slot)}
                            >
                                {slot}
                            </button>
                        </div>
                    ))}
                </div>
                {selectedSlot && (
                    <div className="d-flex justify-content-end mb-4 mr-2">
                        <button className="btn border-primary" onClick={() => handleTimeSelection(selectedSlot, selectedDate)} style={{ width: '20%' }}>
                            Book
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar mb-5 navbar-expand-lg navbar-light bg-primary sticky-top mt-0 px-3 wow fadeIn" style={{ backgroundColor: "white" }}>
                <Link className="px-5 navbar-brand d-flex align-items-center" to="/home">
                    <div style={{ borderRadius: '50%', backgroundColor: "black", width: '50px', height: '50px', color: 'white', display: 'inline-block', textAlign: 'center', fontWeight: '500', lineHeight: '45px' }}>AR</div>
                </Link>
                <ul className="px-5 navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" style={{ color: 'black' }}><h5>Help?</h5> </Link>
                    </li>
                </ul>
            </nav>

            {/* Appointment */}
            <div className="container mb-5">
                <div className="row g-5">
                    <div className="col-lg-3">
                        <img src="Images/Doctor.png" alt="..." style={{ height: '250px', width: '250px' }} />
                    </div>
                    <div className="col-lg-9">
                        <h3 className="mt-5">Dr. Aniketh Reddy</h3>
                        <p>Cardiologist & House Surgeon</p>
                        <button className="btn border-primary" onClick={viewProfile}>View Profile</button>
                    </div>
                </div>
            </div>
            <hr style={{ margin: '20px 0', borderTop: '3px solid #000' }} />

            {/* Mode of Appointment */}
            <div className="container mb-5">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <h5>Book Appointment</h5>
                        <p>Fee approx- ₹500</p>

                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4">
                                <button className="btn border-black mb-2" onClick={() => selectMode('In-person')}><FontAwesomeIcon icon={faClinicMedical} style={{ height: '50px' }} /></button>
                            </div>
                            <div className="col-lg-4">
                                <button className="btn border-black mb-2" onClick={() => selectMode('In-person')}><FontAwesomeIcon icon={faPhoneAlt} style={{ height: '55px' }} /></button>
                            </div>
                            <div className="col-lg-4">
                                <button className="btn border-black mb-2" onClick={() => selectMode('In-person')}><FontAwesomeIcon icon={faVideo} style={{ height: '50px' }} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Appointment Booking */}
            <div>
                <div>{generateCalendar()}</div>
                {displaySlots()}
            </div>

        </div>
    );
}

export default Appointment