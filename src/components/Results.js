import Button from './Button';
import ResultsContainer from './ResultsContainer';

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