import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

const Analytics = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });
  return (
    <>
      <h1>Data</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptatem quod dolorum
        voluptas quas quidem natus. Quisquam voluptatum, quibusdam, quia, quos
        voluptates voluptatem quod dolorum voluptas quas quidem natus.
      </p>
      <div style={{ height: "600px", width: "100%" }}>
        <DataGrid
          {...data}
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
        />
      </div>
    </>
  );
};

export default Analytics;
