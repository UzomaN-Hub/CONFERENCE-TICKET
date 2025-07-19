// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/form/form.jsx';
import Ticket from './pages/ticket/ticket.jsx';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  );
};

export default App;
