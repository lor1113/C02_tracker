import './App.css';
import Button from './components/Button';
import ResultsContainer from './components/ResultsContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>CO<span className='subscript'>2</span> tracker</h1>
      </header>
      <ResultsContainer />
      <Button />
    </div>
  );
}

export default App;
