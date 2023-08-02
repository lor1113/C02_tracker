import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 1em;
    padding: 0.7em;
    border: none;
    background-color: rgb(84, 79, 197);
    color: white;
    font-weight: bold;
    &:hover {
        background-color: lightgreen;
        color: black;
    }
`

const QuestionnaireButton = ({handleSubmit,allCompleted}) => {
    return (
        <StyledButton onClick={handleSubmit} className="questionnaireButton" type="button" disabled={!allCompleted}>See my results!</StyledButton>
    )
    
}

export default QuestionnaireButton