function EnergyForm ({handleOnChange, formValues}) {
    return(
        <form onChange={handleOnChange} className='initialForm'>
            <span>
                <label htmlFor="heatingCount">How many months a year do you use heating?</label><br/>
                <input type="number" id="heatingCount" name="energy" min="0" max="12" defaultValue={formValues["heatingCount"] ? formValues["heatingCount"] :"" } required/>
            </span>
            <span>
                <label htmlFor="heatingCount">How many months a year do you use air conditioning?</label><br/>
                <input type="number" id="coolingCount" name="energy" min="0" max="12" defaultValue={formValues["coolingCount"] ? formValues["coolingCount"] :"" } required/>
            </span>
            <span>
                <label htmlFor="energyElectricity">Do you get electricity from renewable sources?</label><br/>
                <select name="energy" id="energyElectricity" defaultValue={formValues["energyElectricity"] ? formValues["energyElectricity"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="entirely">Entirely from renewable sources</option>
                <option value="mostly">Mostly from renewable sources</option>
                <option value="partially">Partially from renewable sources</option>
                <option value="none">Entirely from non renewable sources</option>
                </select>
            </span>
        </form>
    )
}
export default EnergyForm;