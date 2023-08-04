import type { ChartConfiguration } from "chart.js";
import { Chart, registerables } from "chart.js";
import { memo, useEffect, useRef } from "react";
import { months } from "@/helper/Util";

const DataChart = (props: ChartConfiguration) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const labels = months({ count: 7 });

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          animation: {
            // animate data change
            duration: 500,
          },
          ...props.options,
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [props]);

  return <canvas ref={chartRef} />;
};

Chart.register(...registerables);

export default memo(DataChart);
