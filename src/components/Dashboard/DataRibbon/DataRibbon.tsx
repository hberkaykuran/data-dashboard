import { Grid } from "@mui/material";
import DataCard from "../DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={scss.dataRibbon}>
      <Grid>
        <DataCard
          title={"Total Customers"}
          value={"7"}
          description={"Total number of Customers"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Sales"}
          value={"268"}
          description={"Total number of sales"}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total Revenue"}
          value={"$ 32,000"}
          description={"Total revenue"}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
