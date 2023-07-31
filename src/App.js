import './App.css';
import Questionnaire from './Questionnaire';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Questionnaire/>
        </Route>
        <Route path="/results">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
