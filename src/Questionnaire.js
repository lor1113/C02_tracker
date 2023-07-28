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
        if (event.target.value){
            newFormValues[event.target.id] = event.target.value
        } else {
            delete newFormValues[event.target.id]
        }
        
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