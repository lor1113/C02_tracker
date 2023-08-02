
const QuestionnaireButton = ({handleSubmit,allCompleted}) => {
    return (
        <button onClick={handleSubmit} className="questionnaireButton" disabled={!allCompleted}>See my results!</button>
    )
}

export default QuestionnaireButton