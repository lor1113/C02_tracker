import './App.css';
import Button from './components/Button';
import ResultsContainer from './components/ResultsContainer';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const websiteState = location.state
    const navigate = useNavigate()

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