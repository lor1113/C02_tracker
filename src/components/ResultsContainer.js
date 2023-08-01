import React from "react";
import { useEffect, useState } from 'react';
import Chart from './Chart';
import FootprintDetail from './FootprintDetail';

const ResultsContainer = ({websiteState}) => {
      const [chartOptions, setChartOptions] = useState(null)
      const [oldChartOptions, setOldChartOptions] = useState(null)

      const titleText1 = (websiteState.oldResults ? 'New Results: CO<span class="highcharts-title subscript">2</span> footprint by category' :
      'Your Results: CO<span class="highcharts-title subscript">2</span> footprint by category')
      const titleText2 = 'Previous Results: CO<span class="highcharts-title subscript">2</span> footprint by category'

      const getChartOptions = function(stateKey, titleText) {
          const options = {
            chart: {
            type: 'pie'
            },
            title: {
              text: titleText
            },
            tooltip: {
              pointFormat: '<b>{point.y}</b> Tons CO2'
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  enabled: true,
                  format: '{point.name}: {point.percentage:.1f}%'
                }
              }
            },
            series: [
              {
                data: [
                  {
                    name: 'Vacations',
                    y: websiteState[stateKey].vacation
                  },
                  {
                    name: 'Transport',
                    y: websiteState[stateKey].transport
                  },
                  {
                    name: 'Diet',
                    y: websiteState[stateKey].diet
                  },
                  {
                    name: 'Personal consumption',
                    y: websiteState[stateKey].consumption
                  },
                  {
                    name: 'Domestic energy',
                    y: websiteState[stateKey].energy
                  }
                ]
              }
            ]
          }
          return options
        }

    useEffect(() => {
      setChartOptions(getChartOptions("results", titleText1))
      if (websiteState.oldResultsPresent) {
        setOldChartOptions(getChartOptions("oldResults", titleText2))
      }
    }, [])

    return (
        <div className="chartContainer">
            <div className="chartDiv">
                <Chart footprintData={websiteState.results} chartOptions={chartOptions} />
                <FootprintDetail footprintData={websiteState.results} />
            </div>
            {websiteState.oldResultsPresent ? 
                <div className="chartDiv">
                    <Chart footprintData={websiteState.oldResults} chartOptions={oldChartOptions} />
                    <FootprintDetail footprintData={websiteState.oldResults} />
                </div> : <></>}
        </div>
    )
}

export default ResultsContainer;