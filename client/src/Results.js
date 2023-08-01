import './App.css';
import Button from './components/Button';
import ResultsContainer from './components/ResultsContainer';

const Results = ({websiteState}) => {

    return (
        <div className="results">
            <header>
                <h1>CO<span className='subscript'>2</span> tracker</h1>
            </header>
            <ResultsContainer websiteState={websiteState} />
            <Button />
        </div>
    );
}

export default Results;