// src/components/FlightChart.js
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const FlightChart = ({ flights }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current;
      chartInstance.destroy();
    }

    const data = {
      labels: flights.map((flight, index) => `Flight ${index + 1}`),
      datasets: [
        {
          label: 'Flight Prices',
          data: flights.map(flight => flight.price),
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
    };

    const chartCanvas = chartRef.current.getContext('2d');
    new Chart(chartCanvas, config);

  }, [flights]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default FlightChart;
