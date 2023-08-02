import React from "react";

function FootprintDetail({footprintData}) {
    const values = Object.values(footprintData);
    const totalFootprint = values.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const roundedFootprint = Number(totalFootprint.toFixed(2))

    return (
        <>
            <h3>My carbon footprint: {roundedFootprint} Tons of CO<span className="subscript">2</span></h3>
            <h3>World average: 4.79 Tons of CO<span className="subscript">2</span></h3>
        </>
    )
}

export default FootprintDetail;