import TransportForm from "./TransportForm";

function TransportQuestionnaire ({dropdownClick, dropdown, handleOnChange, formValues}) {
    return(
        <div className="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 2?0:2))}> <h3>Section: Transport</h3> </span>
            {dropdown === 2?<TransportForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
    
}
export default TransportQuestionnaire;