import './App.css';
import React, {useState} from 'react';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results'

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
    "oldResults": {
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
    "allCompleted": false,
    "oldResultsPresent": false
  })
}

function App() {
  const [websiteState,setWebsiteState] = useState(() => baseState())

  const stateHandler = (state) => {
    console.log(state)
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