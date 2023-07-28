import TransportForm from "./TransportForm";

function TransportQuestionnaire ({dropdownClick, dropdown, handleOnChange}) {
    if (dropdown !== 2){
        return(<div onClick = {(event) => dropdownClick(event, 2)}>Transportation</div>)
    } else {
        return(<>
                <div onClick = {(event) => dropdownClick(event, 0)}>Transportation Form </div>
                <TransportForm handleOnChange={handleOnChange}/>
            </>)
    }
    
}
export default TransportQuestionnaire;