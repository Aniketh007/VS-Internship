import React, { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-svg-core/styles.css';




function Book() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [ setOTP] = useState('');
    const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSendOTP = () => {
        // Here, you would ideally call an API to generate the OTP and send it via WhatsApp
        // For demonstration, I'll just generate a random OTP
        const generatedOTP = Math.floor(1000 + Math.random() * 9000); // Replace with your OTP generation logic
        setOTP(generatedOTP);

        // Replace 'YourMessage' with the message you want to send, including the OTP
        const message = `Your OTP for verification is: ${generatedOTP}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const history = useNavigate();
    const viewProfile = () => {
        history('/home');
    }
    const location = useLocation();
    const selectedTime = location.state?.selectedTime;
    const Date = location.state?.Date;

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
            <div className="ml-5">
                <h4>Appointment Booked for-</h4>
                <h5>{selectedTime},{Date}</h5>
            </div>
            <div className="container-fluid border border-dark d-flex justify-content-center align-items-center flex-column mb-5" style={{ width: '500px', borderRadius: '40px', height: '300px' }}>
                <div className="d-flex flex-column align-items-center mb-4">
                    <input className="mx-5 mb-3" type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={handleChange} />
                    <button className="btn btn-dark" onClick={handleSendOTP}>Send OTP via WhatsApp</button>
                </div>
                <input className="mx-5" type="text" placeholder="Enter OTP" />
                <button className="btn btn-dark mt-3" onClick={() => setIsAppointmentBooked(true)}>Submit</button>
                {isAppointmentBooked && <p>Appointment Booked</p>}

            </div>
        </div>
    )
}

export default Book

