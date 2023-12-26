import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import React from 'react';
import Contact from './contact';
import Appointment from './Appointment';
import Book from './book';
import Bypass from './services/bypassSurgery';
import Heart from './services/heartTransplant';
import Valve from './services/valveTransplant';
import Cardiac from './services/cardiacCatheterization';
import Cardiology from './services/interventionalCardiology';
import Echocardiogram from './services/echocardiogram';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route path="/book" element={<Book />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        {/* Services */}
        <Route path="/bypassSurgery" element={<Bypass />} />
        <Route path="/heartTransplant" element={<Heart />} />
        <Route path="/valveTransplant" element={<Valve />} />
        <Route path="/cardiacCatheterization" element={<Cardiac />} />
        <Route path="/interventionalCardiology" element={<Cardiology />} />
        <Route path="/echocardiogram" element={<Echocardiogram />} />
      </Routes>
    </Router>
  );
}

export default App;
