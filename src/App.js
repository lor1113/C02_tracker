import './App.css';
import React, {useState} from 'react';
import Questionnaire from './Questionnaire';
import Results from './Results'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const baseState = () => {
  return({
    "answers": {
      "vacation":{},
      "diet":{},
      "transport":{},
      "consumption":{},
      "energy":{}
    },
    "results": {
      "vacation":0,
      "diet":0,
      "transport":0,
      "consumption":0,
      "energy":0
    },
    "completed":{
      "vacation":false,
      "diet":false,
      "transport":false,
      "consumption":false,
      "energy":false,
    },
    "allCompleted": false
  })
}

function App() {
  const [websiteState,setWebsiteState] = useState(() => baseState())

  const stateHandler = (state) => {
    setWebsiteState(state)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire websiteState={websiteState} stateHandler={stateHandler}/>}/>
        <Route path="/results" element={<Results websiteState={websiteState}/>}/>
      </Routes>
    </Router>
  );
}

export default App;