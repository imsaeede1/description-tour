import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
    title: {
      display: true,
      text: "میزان تحقیق پیش بینی ها",
    },
  },
  hover: {
    mode: "index",
    intersec: false,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "",
      },
    },
    y: {
      title: {
        display: true,
        text: "",
      },
      min: 0,
      max: 6,
      ticks: {
        // forces step size to be 50 units
        stepSize: 1,
      },
    },
  },
};

const labels = ["روز اول", "روز دوم", "روز سوم", "روز چهارم"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 6 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 2, max: 6 })),
      borderColor: "rgb(53, 162, 63)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function ChartTest() {
  return <Line options={options} data={data} />;
}

// const config = {
//   type: 'line',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       tooltip: {
//         mode: 'index',
//         intersect: false
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart'
//       }
//     },
//     hover: {
//       mode: 'index',
//       intersec: false
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Month'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Value'
//         },
//         min: 0,
//         max: 6,
//         ticks: {
//           // forces step size to be 50 units
//           stepSize: 1
//         }
//       }
//     }
//   },
// };
