const vacationDistance = {
    "local":0.15,
    "country":0.5,
    "continent":1.5,
    "worldwide":4
}

const vacationTravel = {
    "transit":0.15,
    "car": 0.6,
    "plane":1
}

const transportType = {
    "transit":0.15,
    "car": 0.6,
    "walking":0.01
}

const dietType = {
    "omnivore": 1.25,
    "pescatarian": 0.8,
    "vegetarian": 0.6,
    "vegan" : 0.2
}

const dietLocal = {
    "high": 1,
    "mid": 1,
    "low": 1
}

const consumptionClothes = {
    "weekly": 4,
    "biweekly": 2,
    "monthly": 1,
    "fewMonths": 0.5
}   

const consumptionElectronics = {
    "fewMonths": 0.25,
    "halfYear": 0.5,
    "year": 1,
    "fewYears": 0.5
}

const consumptionSustainability = {
    "primary": 0.5,
    "aLot": 0.7,
    "somewhat": 0.8,
    "notMuch": 1
}

const energyElectricity = {
    "entirely": 0.5,
    "mostly": 0.8,
    "partially": 1,
    "none": 1.5
}

const vacationMult = 0.1
const transportMult = 0.75
const dietMult = 2
const consumptionMult = 5
const coolingMult = 1
const heatingMult = 1
const energyMult = 1.8

const c02Calculator = (answers) => {
    console.log(answers)
    const vacationAnswers = answers["vacation"]
    const vacationOut = vacationDistance[vacationAnswers["vacationDistance"]] * vacationTravel[vacationAnswers["vacationTravel"]] * vacationAnswers["vacationCount"] * vacationMult
    const transportAnswers = answers["transport"]
    const transportOut = transportType[transportAnswers["transportType"]] * transportAnswers["travelCount"] * transportMult
    const dietAnswers = answers["diet"]
    const dietOut = dietType[dietAnswers["dietType"]] * dietLocal[dietAnswers["dietLocal"]] * dietMult
    const consumptionAnswers = answers["consumption"]
    const consumptionOut = consumptionClothes[consumptionAnswers["consumptionClothes"]] * consumptionElectronics[consumptionAnswers["consumptionElectronics"]] * consumptionSustainability[consumptionAnswers["consumptionSustainability"]] * consumptionMult
    const energyAnswers = answers["energy"]
    const energyOut = (energyAnswers["heatingCount"] / 12 * heatingMult) + (energyAnswers["coolingCount"] / 12 * coolingMult) + (energyElectricity[energyAnswers["energyElectricity"]] * energyMult)
    console.log(vacationOut,transportOut, dietOut,consumptionOut,energyOut)
    const out = {
        "vacation": Number(vacationOut.toFixed(2)),
        "transport": Number(transportOut.toFixed(2)),
        "diet": Number(dietOut.toFixed(2)),
        "consumption": Number(consumptionOut.toFixed(2)),
        "energy": Number(energyOut.toFixed(2))
    }
    return out
}

export default c02Calculator