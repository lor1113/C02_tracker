import React from "react";

function FootprintDetail({footprintData}) {
    const values = Object.values(footprintData);
    const totalFootprint = values.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    return (
        <>
            <h3>My carbon footprint: {totalFootprint}</h3>
            <h3>World average: </h3>
            <h3>Group average: </h3>
        </>
    )
}

export default FootprintDetail;