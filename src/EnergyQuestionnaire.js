import EnergyForm from "./EnergyForm";

function EnergyQuestionnaire ({dropdownClick, dropdown, handleOnChange, formValues}) {
    return(
        <div className="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 5?0:5))}> <h3>Section: Domestic Energy</h3> </span>
            {dropdown === 5?<EnergyForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
}
export default EnergyQuestionnaire;