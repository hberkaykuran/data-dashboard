import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionsBottomRow from "@/components/Dashboard/TransactionsBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
        <TransactionsBottomRow />
      </Grid>
    </Box>
  );
};

export default Dashboard;
