import { Grid, Paper } from "@mui/material";
import scss from "./TransactionsBottomRow.module.scss";
import DataChart from "@/components/DataChart";
import { doughnutChartData } from "@/components/mockData";

const TransactionsBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsBottomRow;
