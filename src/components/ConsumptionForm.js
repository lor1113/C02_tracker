function ConsumptionForm ({handleOnChange, formValues}) {
    return(
        <form onChange={handleOnChange} className='initialForm'>
            <span>
                <label htmlFor="consumptionClothes">How often do you buy new clothes?</label><br/>
                <select name="consumption" id="consumptionClothes"  defaultValue={formValues["consumptionClothes"] ? formValues["consumptionClothes"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="monthly">Monthly</option>
                <option value="fewMonths">Every few months</option>
                </select>
            </span>
            <span>
                <label htmlFor="consumptionElectronics">How often do you buy new electronic devices?</label><br/>
                <select name="consumption" id="consumptionElectronics" defaultValue={formValues["consumptionElectronics"] ? formValues["consumptionElectronics"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="fewMonths">Every few months</option>
                <option value="halfYear">Every 6 months</option>
                <option value="year">Every year</option>
                <option value="fewYears">Every few years</option>
                </select>
            </span>
            <span>
                <label htmlFor="consumptionSustainability">How much do you consider sustainability when buying products?</label><br/>
                <select name="consumption" id="consumptionSustainability" defaultValue={formValues["consumptionSustainability"] ? formValues["consumptionSustainability"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="primary">It's my primary concern</option>
                <option value="aLot">A lot</option>
                <option value="somewhat">Somewhat</option>
                <option value="notMuch">Not much</option>
                </select>
            </span>
        </form>
    )
}
export default ConsumptionForm;