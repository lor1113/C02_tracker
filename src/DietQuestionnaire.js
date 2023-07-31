import DietForm from "./DietForm";

function DietQuestionnaire ({dropdownClick, dropdown, handleOnChange, formValues}) {
    return(
        <div className="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 3?0:3))}> <h3>Section: Diet</h3> </span>
            {dropdown === 3?<DietForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
}
export default DietQuestionnaire;