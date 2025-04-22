// Chart.jsx
import React from "react";
import ApexCharts from "react-apexcharts";

const Chart = ({ title, options, series, type }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <ApexCharts options={options} series={series} type={type} height={300} />
    </div>
  );
};

export default Chart;
