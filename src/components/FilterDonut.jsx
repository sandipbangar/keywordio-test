import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from "chart.js"

Chart.register(ArcElement);
const PieChart = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const data = {
    labels: ['Option 1', 'Option 2', 'Option 3'],
    datasets: [
      {
        data: [selectedOption === 'option1' ? 30 : 0,
               selectedOption === 'option2' ? 45 : 0,
               selectedOption === 'option3' ? 25 : 0],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
  return (
    <div>
      <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;