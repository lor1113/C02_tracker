const plusString = "These choices would consume an additional "
const minusString ="These choices would save "
const endString = " tons of C02 per year."

function SubQuestionnaireDiff ({tempResult, prevResult}) {
    const diff = Number((tempResult - prevResult).toFixed(2))
    if (diff !== 0) {
        return(
            <span className={diff < 0 ? "green" : "red"}>{diff < 0 ? minusString:plusString}{Math.abs(diff)}{endString}</span>
        )
    } else {
        return (<span>No Change</span>)
    }
}
export default SubQuestionnaireDiff;