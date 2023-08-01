import React from "react";

function FootprintDetail({footprintData}) {
    const values = Object.values(footprintData);
    const totalFootprint = values.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const roundedFootprint = Number(totalFootprint.toFixed(2))

    return (
        <div className="footprintDiv">
            <h3>Carbon footprint: {roundedFootprint} Tons of CO<span className="subscript">2</span></h3>
            <h3>World average: 4.79 Tons of CO<span className="subscript">2</span></h3>
            {roundedFootprint > 4.79 ? <h3>My footprint is {((roundedFootprint-4.79)/4.79*100).toFixed(1)} % higher than the world average</h3> : null}
            {roundedFootprint < 4.79 ? <h3>My footprint is {((4.79-roundedFootprint)/4.79*100).toFixed(1)} % higher than the world average</h3> : null}
            {roundedFootprint == 4.79 ? <h3>My footprint is equal to the world average</h3> : null}
        </div>
    )
}

export default FootprintDetail;