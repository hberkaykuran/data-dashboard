import { months } from "@/helper/Util";

const labels = months({count: 7});

export const lineChartData = {
    labels: months({count: 12}),
    datasets: [
        {
            label: "Transactions",
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
            
        },
    ],
};

export const doughnutChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "Transactions Dataset",
            data: [300, 50, 100],
            backgroundColor: ["#4bc0c0", "#348a8a", "#1d5353"],
            hoverOffset: 4,
            // gray label color
            color: "#fff",
        },
    ],
};