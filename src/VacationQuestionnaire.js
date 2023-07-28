import VacationForm from "./VacationForm";

function VacationQuestionnaire ({dropdownClick, dropdown, handleOnChange}) {
    if (dropdown !== 1){
        return(<div onClick = {(event) => dropdownClick(event, 1)}>Vacations</div>)
    } else {
        return(<>
                <div onClick = {(event) => dropdownClick(event, 0)}>Vacation Form </div>
                <VacationForm handleOnChange={handleOnChange}/>
            </>)
    }
    
}
export default VacationQuestionnaire;