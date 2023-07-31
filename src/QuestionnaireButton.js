
const QuestionnaireButton = ({handleSubmit,allCompleted}) => {
    return (
        <button onClick={handleSubmit} className="questionnaireButton" type="button" disabled={!allCompleted}>See my results!</button>
    )
    
}

export default QuestionnaireButton