import React from "react";
import { Bar } from "react-chartjs-2";
import "../../App.css";
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

function Bargraph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Product A",
        data: [20, 30, 40, 50, 60, 70],
        backgroundColor: "rgb(138,165,92)",
        borderRadius: 6,
      },
      {
        label: "Product B",
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: "rgb(204,226,167)",
        borderRadius: 6,
      },
    ],
  };

  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        // text: "Modular Bar Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" px-[.8vw] py-[.8vw] bg-[#ffffff] rounded-lg border-[.18rem]  h-[36vh] shadow-inner">
      <div className="h-full rounded-md  flex items-center justify-center p-[.25vw] ">
        <Bar options={option} data={data} className="w-[30vw] h-[30vw]" />
      </div>
    </div>
  );
}

export default Bargraph;
