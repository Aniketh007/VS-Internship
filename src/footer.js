import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main St, City, Country</li>
              <li>Email: example@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <div className="d-flex pt-2">
                        <li><button className="btn btn-outline-light btn-social rounded-circle mx-1" href=""><FontAwesomeIcon icon={faTwitter} className="text-light" size="1x" /></button></li>
                        <li><button className="btn btn-outline-light btn-social rounded-circle mx-1" href=""><FontAwesomeIcon icon={faInstagram} className="text-light" size="1x" /></button></li>
                        <li><button className="btn btn-outline-light btn-social rounded-circle mx-1" href=""><FontAwesomeIcon icon={faFacebook} className="text-light" size="1x" /></button></li>
                        <li><button className="btn btn-outline-light btn-social rounded-circle mx-1" href=""><FontAwesomeIcon icon={faYoutube} className="text-light" size="1x" /></button></li>
                    </div>
            </ul>
          </div>
          <div className="col-md-6">
            
            <h5 className="text-light mb-4">Quick Links</h5>
            <ul className='list-unstyled'>
                <li><a className="btn btn-link text-decoration-none text-light" href="#about">About Us</a></li>
                <li><a className="btn btn-link text-decoration-none text-light" href="#services">Our Services</a></li>
                <li><a className="btn btn-link text-decoration-none text-light" href="#testimonials">Testimonials</a></li>
                <li><Link className="btn btn-link text-decoration-none text-light" to="/">Appointment</Link></li>
                <li><Link className="btn btn-link text-decoration-none text-light" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} Aniketh Reddy</p>
      </div>
    </footer>
  );
};

export default Footer;
