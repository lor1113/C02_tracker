import React, { useState } from 'react';
import VacationForm from "./VacationForm";
import TransportForm from "./TransportForm";
import DietForm from "./DietForm";
import ConsumptionForm from "./ConsumptionForm"
import EnergyForm from "./EnergyForm"
import QuestionnaireButton from './QuestionnaireButton';
import {useNavigate} from 'react-router-dom';

import c02Calculator from './c02Calculator';

import SubQuestionnaire from './SubQuestionnaire';

const questionCounts = {
    "vacation":3,
    "diet":2,
    "transport":2,
    "consumption":3,
    "energy":3
}

function Questionnaire({websiteState, stateHandler}) {
    const [dropdown,setDropdown] = useState(0)
    const [formValues, setFormValues] = useState(() => websiteState["answers"])
    const [completed, setCompleted] = useState(() => websiteState["completed"])
    const [allCompleted, setAllCompleted] = useState(websiteState["allCompleted"])
    const [tempResults, setTempResults] = useState(() => websiteState["results"])
    const navigate = useNavigate();

    const prevResults = websiteState["results"]

    const dropdownClick = (event,clicked) => {
        event.preventDefault()
        setDropdown(clicked)
    }

    const handleOnChange = (event) => {
        let newFormValues = {...formValues}
        if (event.target.value){
            if (event.target.type === "number") {
                const intValue = Number(event.target.value)
                const eventMax = Number(event.target.max)
                const eventMin = Number(event.target.min)
                if (intValue > eventMax) {
                    newFormValues[event.target.name][event.target.id] = eventMax
                } else if (intValue < eventMin) {
                    newFormValues[event.target.name][event.target.id] = eventMin
                } else {
                    newFormValues[event.target.name][event.target.id] = event.target.value
                }
            } else {
                newFormValues[event.target.name][event.target.id] = event.target.value
            }
            if (Object.keys(newFormValues[event.target.name]).length === questionCounts[event.target.name]) {
                let newCompleted = {...completed}
                newCompleted[event.target.name] = true
                if (Object.values(newCompleted).every(Boolean)) {
                    setAllCompleted(true)
                }
                setCompleted(newCompleted)
            }
        } else {
            delete newFormValues[event.target.name][event.target.id]
            let newCompleted = {...completed}
            newCompleted[event.target.name] = false
            setCompleted(newCompleted)
            setAllCompleted(false)
        }
        const newTempResults = c02Calculator(newFormValues)
        setTempResults(newTempResults)
        setFormValues(newFormValues)
    }

    const handleSubmit = () => {
        const outValues = c02Calculator(formValues)
        const newWebsiteState = {
            "answers": formValues,
            "results": outValues,
            "completed": completed,
            "allCompleted": allCompleted
        }
        stateHandler(newWebsiteState)
        navigate('/results')
    }

    return (
        <div>
            <SubQuestionnaire dropdownNum={1} tempResult={tempResults["vacation"]} prevResult={prevResults["vacation"]} SubForm={VacationForm} formText={"Section: Vacations"} formValues={formValues["vacation"]} isCompleted={completed["vacation"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
            <SubQuestionnaire dropdownNum={2} tempResult={tempResults["transport"]} prevResult={prevResults["transport"]} SubForm={TransportForm} formText={"Section: Transport"} formValues={formValues["transport"]} isCompleted={completed["transport"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
            <SubQuestionnaire dropdownNum={3} tempResult={tempResults["diet"]} prevResult={prevResults["diet"]} SubForm={DietForm} formText={"Section: Diet"} formValues={formValues["diet"]} isCompleted={completed["diet"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
            <SubQuestionnaire dropdownNum={4} tempResult={tempResults["consumption"]} prevResult={prevResults["consumption"]} SubForm={ConsumptionForm} formText={"Section: Consumption"} formValues={formValues["consumption"]} isCompleted={completed["consumption"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
            <SubQuestionnaire dropdownNum={5} tempResult={tempResults["energy"]} prevResult={prevResults["energy"]} SubForm={EnergyForm} formText={"Section: Energy"} formValues={formValues["energy"]} isCompleted={completed["energy"]} dropdownClick={dropdownClick} dropdown={dropdown} handleOnChange={handleOnChange}/>
            <QuestionnaireButton handleSubmit={handleSubmit} allCompleted={allCompleted}/>
        </div>
    );
}

export default Questionnaire;