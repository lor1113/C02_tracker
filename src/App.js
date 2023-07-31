import './App.css';
import React from 'react';
import Questionnaire from './Questionnaire';
import Results from './Results'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App;