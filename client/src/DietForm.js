function DietForm ({handleOnChange, formValues}) {
    return(
        <form onChange={handleOnChange} className='initialForm'>
            <span>
                <label htmlFor="dietType">What diet do you follow?</label><br/>
                <select name="diet" id="dietType" defaultValue={formValues["dietType"] ? formValues["dietType"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="omnivore">Omnivore: Eating meat, fish, animal products and plants</option>
                <option value="pescatarian">Pescatarian: Eating fish, animal products and plants</option>
                <option value="vegetarian">Vegetarian: Eating animal products and plants</option>
                <option value="vegan">Vegan: Eating only plant-based products</option>
                </select>
            </span>
            <span>
                <label htmlFor="dietLocal">What is your preference for local produce?</label><br/>
                <select name="diet" id="dietLocal" defaultValue={formValues["dietLocal"] ? formValues["dietLocal"] :"lol" } required>
                <option value="lol" hidden disabled/>
                <option value="high">I try to eat local produce whenever I can.</option>
                <option value="mid">I sometimes choose local produce over other options.</option>
                <option value="low">I have no preference/don't pay attention to it.</option>
                </select>
            </span>
        </form>
    )
}
export default DietForm;