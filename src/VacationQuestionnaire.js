import VacationForm from "./VacationForm";

function VacationQuestionnaire ({dropdownClick, dropdown, handleOnChange}) {
    return(
        <div class="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 1?0:1))}> <h3>Vacation Form</h3> </span>
            {dropdown === 1?<VacationForm handleOnChange={handleOnChange}/>:<></>}
        </div>
        )
    
}
export default VacationQuestionnaire;