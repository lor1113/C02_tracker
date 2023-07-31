import VacationForm from "./VacationForm";

function VacationQuestionnaire ({dropdownClick, dropdown, handleOnChange, formValues, Completed}) {
    return(
        <div className="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 1?0:1))}> <span>Section: Vacation</span> <span>{Completed ? "Section Complete!":"Not Completed."}</span> </span>
            {dropdown === 1?<VacationForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
    
}
export default VacationQuestionnaire;