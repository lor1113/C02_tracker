import ConsumptionForm from "./ConsumptionForm";

function ConsumptionQuestionnaire ({dropdownClick, dropdown, handleOnChange, formValues}) {
    return(
        <div className="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 4?0:4))}> <h3>Section: Consumption</h3> </span>
            {dropdown === 4?<ConsumptionForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
}
export default ConsumptionQuestionnaire;