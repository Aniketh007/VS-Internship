// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
