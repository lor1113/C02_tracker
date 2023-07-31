import React, { useState } from 'react';
import VacationForm from "./VacationForm";
import TransportForm from "./TransportForm";
import DietForm from "./DietForm";
import ConsumptionForm from "./ConsumptionForm"
import EnergyForm from "./EnergyForm"

import SubQuestionnaire from './SubQuestionnaire';

const questionCounts = {
    "vacation":3,
    "diet":2,
    "transport":2,
    "consumption":3,
    "energy":3
}

function Questionnaire() {
    const [dropdown,setDropdown] = useState(0)
    const [formValues, setFormValues] = useState({
        "vacation":{},
        "diet":{},
        "transport":{},
        "consumption":{},
        "energy":{}
    })
    const [completed, setCompleted] = useState({
        "vacation":false,
        "diet":false,
        "transport":false,
        "consumption":false,
        "energy":false,
    })
    
    const [allCompleted, setAllCompleted] = useState(false)

    const dropdownClick = (event,clicked) => {
        event.preventDefault()
        setDropdown(clicked)
    }

    const handleOnChange = (event) => {
        console.log(event)
        let newFormValues = {...formValues}
        if (event.target.value){
            newFormValues[event.target.name][event.target.id] = event.target.value
            if (Object.keys(newFormValues[event.target.name]).length === questionCounts[event.target.name]) {
                let newCompleted = {...completed}
                newCompleted[event.target.name] = true
                if (Object.values(newCompleted).every(Boolean)) {
                    setAllCompleted(true)
                    console.log("set all completed true")
                }
                setCompleted(newCompleted)
                console.log(newCompleted)
            }
        } else {
            delete newFormValues[event.target.name][event.target.id]
            let newCompleted = {...completed}
            newCompleted[event.target.name] = false
            setCompleted(newCompleted)
            console.log("set all completed false")
            setAllCompleted(false)
            console.log(newCompleted)
        }
        
        setFormValues(newFormValues)
        console.log(newFormValues)
    }

    return (
    <div>
        <SubQuestionnaire dropdownNum={0} SubForm={VacationForm} formText={"Section: Vacations"} formValues={formValues["vacation"]} isCompleted={completed["vacation"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        <SubQuestionnaire dropdownNum={1} SubForm={TransportForm} formText={"Section: Transport"} formValues={formValues["transport"]} isCompleted={completed["transport"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        <SubQuestionnaire dropdownNum={2} SubForm={DietForm} formText={"Section: Diet"} formValues={formValues["diet"]} isCompleted={completed["diet"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        <SubQuestionnaire dropdownNum={3} SubForm={ConsumptionForm} formText={"Section: Consuption"} formValues={formValues["consumption"]} isCompleted={completed["consumption"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        <SubQuestionnaire dropdownNum={4} SubForm={EnergyForm} formText={"Section: Energy"} formValues={formValues["energy"]} isCompleted={completed["energy"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
        {allCompleted ? <button className="questionnaireButton" type="button" >See my results!</button>  : <button class="questionnaireButton" type="button" disabled>See my results!</button> }
    </div>
    );
}

export default Questionnaire;