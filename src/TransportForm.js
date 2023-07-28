import styled from 'styled-components'

function TransportForm ({handleOnChange}) {
    return(
        <form onChange={handleOnChange}>
            <label for="transportType">What is your primary mode of transportation?</label>
            <select name="transportType" id="transportType">
            <option value="Transit">Public Transit</option>
            <option value="Car">A Car</option>
            <option value="walking">Walking or cycling</option>
            </select> 
            <label for="travelCount">How often do you travel per week?</label>
            <input type="number" id="travelCount" name="travelCount" min="0"/>
        </form> 
    )
}
export default TransportForm;