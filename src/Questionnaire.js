import React, { useState } from 'react';
import styled from 'styled-components'
import VacationQuestionnaire from './VacationQuestionnaire';
import TransportQuestionnaire from './TransportQuestionnaire';

const QuestionnaireDiv = styled.div``

function Questionnaire() {
    const [dropdown,setDropdown] = useState(0)
    const [formValues, setFormValues] = useState({})

    const dropdownClick = (event,clicked) => {
        event.preventDefault()
        setDropdown(clicked)
    }

    const handleOnChange = (event) => {
        let newFormValues = {...formValues}
        newFormValues[event.target.id] = event.target.value
        setFormValues(newFormValues)
        console.log(newFormValues)
    }

    return (
    <QuestionnaireDiv>
        <VacationQuestionnaire dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        <TransportQuestionnaire dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>

    </QuestionnaireDiv>
    );
}

export default Questionnaire;