import TransportForm from "./TransportForm";

function TransportQuestionnaire ({dropdownClick, dropdown, handleOnChange}) {
    return(
        <div class="formDiv">
            <span onClick = {(event) => dropdownClick(event, (dropdown === 2?0:2))}> <h3>Transport Form</h3> </span>
            {dropdown === 2?<TransportForm handleOnChange={handleOnChange}/>:<></>}
        </div>
        )
    
}
export default TransportQuestionnaire;