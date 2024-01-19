import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Keep this import - it's internally necessary for react-chartjs-2 to register the Category scale globally.
const ChartContainerStyle = {
    width: "450px",
    height: "250px",
    padding: "10px 10px",
    borderRadius: "5px"
  };
const LineChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sample Data',
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      // Add more datasets as needed
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={ChartContainerStyle} >
      <Line data={data} options={options}  />
    </div>
  );
};

export default LineChartComponent;
