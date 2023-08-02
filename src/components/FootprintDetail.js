import React from "react";

function FootprintDetail({footprintData}) {
    const values = Object.values(footprintData);
    const totalFootprint = values.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const roundedFootprint = Number(totalFootprint.toFixed(2))

    return (
        <div className="footprintDiv">
            <h4>Carbon footprint: {roundedFootprint} Tons of CO<span className="subscript">2</span></h4>
            <h4>World average: 4.79 Tons of CO<span className="subscript">2</span></h4>
            {roundedFootprint > 4.79 ? <h4>This footprint is {((roundedFootprint-4.79)/4.79*100).toFixed(1)}% above the world average</h4> : null}
            {roundedFootprint < 4.79 ? <h4>This footprint is {((4.79-roundedFootprint)/4.79*100).toFixed(1)}% below the world average</h4> : null}
            {roundedFootprint === 4.79 ? <h4>This footprint is equal to the world average</h4> : null}
        </div>
    )
}

export default FootprintDetail;