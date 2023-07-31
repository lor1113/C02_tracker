import React from "react";
import { useEffect, useState } from 'react';
import Chart from './Chart';
import FootprintDetail from './FootprintDetail';

const ResultsContainer = ({websiteState}) => {
    const [user] = useState({
        name: 'User1',
        footprintData: websiteState["results"]
      })

      console.log("chart start")
      console.log(websiteState)
      const [chartOptions, setChartOptions] = useState(null)
    
      useEffect(() => {
        getChartOptions()
      }, [user])
    
      const getChartOptions = function() {
          const options = {
            chart: {
            type: 'pie'
            },
            title: {
              text: 'CO<span class="highcharts-title subscript">2</span> footprint by category'
            },
            tooltip: {
              pointFormat: '<b>{point.y}</b> CO2'
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
                    y: user.footprintData.vacation
                  },
                  {
                    name: 'Transport',
                    y: user.footprintData.transport
                  },
                  {
                    name: 'Diet',
                    y: user.footprintData.diet
                  },
                  {
                    name: 'Personal consumption',
                    y: user.footprintData.consumption
                  },
                  {
                    name: 'Domestic energy',
                    y: user.footprintData.energy
                  }
                ]
              }
            ]
          };
          setChartOptions(options);
        }

    return (
        <>
            <Chart footprintData={user.footprintData} chartOptions={chartOptions} />
            <FootprintDetail footprintData={user.footprintData} />
        </>
    )
}

export default ResultsContainer;