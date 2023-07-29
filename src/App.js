import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [user] = useState({
    name: 'User1',
    footprintData: {
      vacations: 100,
      transport: 200,
      diet: 300,
      personal: 400,
      energy: 500
    }
  })
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
                y: user.footprintData.vacations
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
                y: user.footprintData.personal
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
    <div className="App">
      <Chart footprintData={user.footprintData} chartOptions={chartOptions} />
    </div>
  );
}

export default App;
