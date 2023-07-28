import styled from 'styled-components'

function VacationForm ({handleOnChange}) {
    return(
        <form onChange={handleOnChange}>
            <label for="vacationCount">How many vacations do you take a year?</label>
            <input type="number" id="vacationCount" name="vacationCount" min="0"/>
            <label for="vacationDistance">How far do you usually travel to vacation?</label>
            <select name="vacationDistance" id="vacationDistance">
            <option value="local">Locally, less than an hour away</option>
            <option value="country">I usually stay within my country</option>
            <option value="continent">I usually stay within my continent</option>
            <option value="worldwide">I usually travel all over the world</option>
            </select> 
            <label for="vacationTravel">How do you usually travel to vacation?</label>
            <select name="vacationTravel" id="vacationTravel">
            <option value="transit">Train/Coach/Public Transit</option>
            <option value="car">With a car</option>
            <option value="plane">With a plane</option>
            </select>
        </form>
    )
}
export default VacationForm;