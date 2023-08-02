function SubQuestionnaire ({dropdownClick, dropdown, dropdownNum, SubForm, formText, handleOnChange, formValues, isCompleted}) {
    return(
        <div id={dropdownNum} className="formDiv">
            <span className="formSpan" onClick = {(event) => dropdownClick(event, (dropdown === dropdownNum?0:dropdownNum))}>
                 <h3>{formText}</h3>
                 <h3>{isCompleted ? <span className="green">Completed!</span> : <span className="red">Not Completed.</span>}</h3>
            </span>
            {dropdown === dropdownNum?<SubForm handleOnChange={handleOnChange} formValues={formValues}/>:<></>}
        </div>
        )
}
export default SubQuestionnaire;