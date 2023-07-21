import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import './style.css';

ChartJS.register(...registerables);

export default function App() {
  const canvasRef = React.useRef(null);
  const [value, setValue] = React.useState(10);
  const [options, setOptions] = React.useState({
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  });
  const [data, setData] = React.useState({
    labels: ['PP', 'PSOE', 'Sumar', 'VOX'],
    datasets: [
      {
        label: 'Cookies',
        type: 'bar',
        backgroundColor: ['blue', 'red', 'pink', 'green'],
        data: [88, 120, 33, 52],
      },
      {
        type: 'scatter',
        backgroundColor: ['blue', 'red', 'pink', 'green'],
        data: [
          { y: 90, x: 1 },
          { y: 130, x: 2 },
          { y: 40, x: 3 },
          { y: 63, x: 4 },
        ],
      },
    ],
  });

  const handleChange = (ev) => {
    setValue(parseInt(ev.target.value));
    console.log(ev.target.value);
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleOnClick = () => {
    let localInfo = JSON.parse(JSON.stringify(data));

    for (let i = 0; i < value; i++) {
      localInfo.datasets.push({
        type: 'scatter',
        backgroundColor: ['blue', 'red', 'pink', 'green'],
        data: [
          { y: 88 + getRandomInt(40), x: 1 },
          { y: 120 + getRandomInt(40), x: 2 },
          { y: 33 + getRandomInt(40), x: 3 },
          { y: 52 + getRandomInt(40), x: 4 },
        ],
      });
    }
    setData(localInfo);
  };

  return (
    <div>
      <h1>Kiko Llaneras Generator</h1>
      <a href="https://elpais.com/espana/elecciones-generales/2023-07-19/quien-va-a-ganar-las-elecciones-esto-dicen-las-encuestas.html">
        <p>¿Cuantas simulaciones quieres hacer?</p>
      </a>
      <input type="number" value={value} onChange={handleChange} />{' '}
      <button onClick={handleOnClick}>HAZ LA 100CIA</button>
      <Chart type="bar" options={options} data={data} />
    </div>
  );
}
