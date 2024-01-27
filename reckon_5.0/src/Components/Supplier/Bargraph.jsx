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
        backgroundColor: "rgb(138,165,92)",
      },
      {
        label: "Product B",
        data: [15, 20, 25, 40, 45, 60],
        backgroundColor: "rgb(204,226,167)",
      },
    ],
  };

  return (
    <div className=" px-[1.5vw] py-[1vw]">
      <div className="  bg-[#f1f1f1] h-[38vh] px-[1.5vw] py-[1vw] rounded-md border-b-2 border-[#d1d1d1] shadow flex items-center justify-center">
        <Bar options={option} data={data} className="w-[30vw] h-[30vw]" />
      </div>
    </div>
  );
}

export default Bargraph;
