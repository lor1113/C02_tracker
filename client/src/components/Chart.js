import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({footprintData, chartOptions}) {
    if (!footprintData) {
        return
    }

    return (
    <div>
        <HighchartsReact 
            highcharts={Highcharts}
            options={chartOptions}
        />
    </div>
    )
}

export default Chart;