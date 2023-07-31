function VacationForm ({handleOnChange, formValues}) {
    return(
        <form className='initialForm' onChange={handleOnChange}>
            <span>
                <label htmlFor="vacationCount">How many vacations do you take a year?</label><br/>
                <input type="number" id="vacationCount" name="vacation" min="0" defaultValue={formValues["vacationCount"] ? formValues["vacationCount"] :""} required/>
            </span>
            <span>
                <label htmlFor="vacationDistance">How far do you usually travel to vacation?</label><br/>
                <select name="vacation" id="vacationDistance" defaultValue={formValues["vacationDistance"] ? formValues["vacationDistance"] :"lol"} required>
                <option value="lol" hidden disabled/>
                <option value="local">Locally, less than an hour away</option>
                <option value="country">I usually stay within my country</option>
                <option value="continent">I usually stay within my continent</option>
                <option value="worldwide">I usually travel all over the world</option>
                </select>
            </span>
            <span>
                <label htmlFor="vacationTravel">How do you usually travel to vacation?</label><br/>
                <select name="vacation" id="vacationTravel" defaultValue={formValues["vacationTravel"] ? formValues["vacationTravel"] :"lol"} required>
                <option value="lol" hidden disabled/>
                <option value="transit">Train/Coach/Public Transit</option>
                <option value="car">With a car</option>
                <option value="plane">With a plane</option>
                </select>
            </span>
        </form>
    )
}
export default VacationForm;