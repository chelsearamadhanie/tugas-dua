import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentCard from './component/StudentCard';
import CalculatorPage from './component/CalculatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentCard />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;