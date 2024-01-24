import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Modular Bar Chart",
    },
  },
};
function Bargraph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Product A",
        data: [20, 30, 40, 50, 60, 70],
        backgroundColor: "green",
      },
      {
        label: "Product B",
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div className="Bargraph">
      <Bar options={option} data={data} />
    </div>
  );
}

export default Bargraph;
