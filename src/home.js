import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import WOW from 'wowjs';
import Counter from './counter';
import { HashLink as Lin } from 'react-router-hash-link';
import { faHeartbeat, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import Footer from "./footer";




function Home() {

  const testimonials = [
    { id: 1, content: "The best care ever. Recently discharged after the treatment of Bypass Surgery. had no confidence of survival but here I am!!", author: "John Doe", image: './Images/testimonials1.png' },
    { id: 2, content: "Never feels like being in a hospital with doctor but in my own house with my family. Great Support.", author: "Jane Smith", image: './Images/testimonials2.png' },
    // Add more testimonials as needed
  ];

  const [isShown, setIsShown] = useState(false);

  const plusIconstyle = { position: 'absolute', top: '87%', left: '25%', transform: 'translate(-50%, -50%)', opacity: isShown ? 1 : 0, transition: 'opacity 0.3s' }

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top mt-0 p-3 wow fadeIn" style={{ backgroundColor: "white" }}>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div style={{ borderRadius: '50%', backgroundColor: "black", width: '50px', height: '50px', color: 'white', display: 'inline-block', textAlign: 'center', fontWeight: '500', lineHeight: '45px' }}>AR</div>
          <h3 className="px-2" style={{ color: 'black' }}>Dr. Aniketh Reddy</h3>
        </Link>

        <button className="navbar-toggler" type="button" onClick={handleToggle} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Lin smooth to="#about" className="nav-link" style={{ color: 'black' }}><h5>About Me</h5> </Lin>
            </li>
            <li className="nav-item">
              <Lin smooth to="#services" className="nav-link" style={{ color: 'black' }}><h5>Services</h5> </Lin>
            </li>
            <li className="nav-item">
              <Lin smooth to="#testimonials" className="nav-link" style={{ color: 'black' }}><h5>Testimonials</h5> </Lin>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: 'black' }}><h5>Contact</h5> </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'black' }}><h5>Book Appointment</h5> </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Profile */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-2 text-white mb-5"><strong>Good Health Is The Root Of All Happiness</strong></h1>
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1">
                    <Counter end={40} duration={3} />
                  </h2>
                  <p className="text-light mb-0">Medical Stuff</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1">
                    <Counter end={55} duration={3} />
                  </h2>
                  <p className="text-light mb-0">Total Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="container-xxl py-5">
              <div className="container">
                <div className="d-flex flex-column align-items-center px-4 px-lg-5">
                  <img className="img-fluid mb-2" src='Images/Doctor.png' style={{ width: "650px", height: '550px' }} alt='...' />
                  <div>
                    <h2>Dr. Aniketh Reddy</h2>
                    <h5>Cardiologist</h5>
                    <h5>MBBS, MD</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Me */}
      <div id="about">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex flex-column">
                  <img className="img-fluid rounded w-75 align-self-end" src="Images/team.png" alt="..." />
                  <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="Images/team1.png" alt="..." style={{ marginTop: '-20%', height: '250px', width: '200px' }} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">Meet Dr. Aniketh Reddy - Your Trusted Cardiologist</h1>
                <p>With a commitment to excellence and patient-centric care, Dr. Aniketh Reddy stands as a beacon of quality healthcare. With extensive experience, cutting-edge expertise, and a compassionate approach, trust in Dr. Reddy for exceptional cardiac care tailored to your well-being.</p>
                <p className="mb-4">Dr. Reddy takes pride in a legacy of medical expertise and unwavering service. Your health and satisfaction are his top priorities, making him the trusted choice for comprehensive and reliable cardiac care.</p>
                <p><FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" size="1x" />Exceptional cardiac care</p>
                <p><FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" size="1x" />Expert in Cardiology</p>
                <p><FontAwesomeIcon icon={faCheckCircle} className="text-primary me-3" size="1x" />Compassionate patient approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div id="services" className="mt-5 mb-5">
        <div className="bg-primary p-4">
          <h2>Services</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Bypass Surgery</h4>
                <p className="mb-4">
                  Bypass surgery, also known as coronary artery bypass grafting (CABG), is a surgical procedure used to treat coronary heart disease. During this procedure, a surgeon creates new pathways, bypassing blocked or narrowed arteries to restore proper blood flow to the heart muscle.</p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/bypassSurgery" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Heart Transplant</h4>
                <p className="mb-4">
                  Heart transplantation involves surgically replacing a failing or diseased heart with a healthy donor heart. This surgery aims to extend patient's lifespan, offering a chance for those with end-stage heart disease to regain heart function and vitality through a new, functioning heart.</p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/heartTransplant" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Valve Transplant</h4>
                <p className="mb-4">Valve transplantation involves replacing a damaged or malfunctioning heart valve with a healthy valve from a donor or a synthetic valve. This procedure is performed to restore proper blood flow through the heart and prevent complications associated with valve disorders. </p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/valveTransplant" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Cardiac Catheterization</h4>
                <p className="mb-4">
                  Cardiac catheterization is a medical procedure used to diagnose and treat various heart conditions. This procedure allows doctors to study the heart's anatomy, measure pressure and oxygen levels in the heart, and perform treatments such as angioplasty or stent placement to address blockages in arteries. </p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/cardiacCatheterization" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Interventional cardiology</h4>
                <p className="mb-4">
                  Interventional cardiology is a specialized field focused on diagnosing and treating cardiovascular diseases using minimally invasive techniques. This discipline involves procedures like angioplasty, stent placement, and catheter-based treatments to address blockages or structural issues within the heart and blood vessels</p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/interventionalCardiology" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
              <div className="service-item bg-light rounded h-100 p-5 position-relative">
                <div className="d-flex align-items-center justify-content-between mb-4" style={{ width: '65px', height: '65px' }}>
                  <FontAwesomeIcon icon={faHeartbeat} className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Echocardiogram</h4>
                <p className="mb-4">
                  An echocardiogram is a non-invasive diagnostic test that utilizes sound waves (ultrasound) to create images of the heart's structure, chambers, and valves.  Echocardiograms help cardiologists evaluate various heart conditions, such as heart valve problems, heart murmurs, congenital heart defects.
                </p>
                <div className="plus-and-readmore">
                  <FontAwesomeIcon icon={faPlus} className="text-primary me-3" />
                  <Link className="btn mx-2" to="/echocardiogram" style={plusIconstyle}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div id="testimonials" className="mt-5 mb-3 container">
        <h2 className="text-center">What Our Patient Say</h2>
        <div className="d-flex justify-content-center"> {/* Center the Carousel */}
          <Carousel>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="testimonial-item text-center"> {/* Center the content */}
                  <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial.image} alt="..." style={{ width: '150px', height: '150px' }} />
                  <h2>{testimonial.content}</h2>
                  <span className="author">{testimonial.author}</span>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;
