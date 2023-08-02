function TransportForm ({handleOnChange, formValues}) {
    return(
        <form onChange={handleOnChange} className='initialForm'>
            <span>
                <label htmlFor="transportType">What is your primary mode of transportation?</label><br/>
                <select name="transport" id="transportType" defaultValue={formValues["transportType"] ? formValues["transportType"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="transit">Public Transit</option>
                <option value="car">A Car</option>
                <option value="walking">Walking or cycling</option>
                </select> 
            </span>
            <span>
                <label htmlFor="travelCount">How often do you travel per week?</label><br/>
                <input type="number" id="travelCount" name="transport" min="0" max="999" defaultValue={formValues["travelCount"] ? formValues["travelCount"] :"" } required/>
            </span>
        </form> 
    )
}
export default TransportForm;