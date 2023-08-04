import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const Settings = () => {
  const [showRevenue, setShowRevenue] = useState(true);
  const [showCustomers, setShowCustomers] = useState(true);
  const [showSales, setShowSales] = useState(true);

  const handleShowRevenueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(e.target.checked);
  };
  const handleShowCustomersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowCustomers(e.target.checked);
  };
  const handleShowSalesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowSales(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Dashboard Settings</h1>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showRevenue}
                      onChange={handleShowRevenueChange}
                    />
                  }
                  label="Revenue"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showCustomers}
                      onChange={handleShowCustomersChange}
                    />
                  }
                  label="Customers"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showSales}
                      onChange={handleShowSalesChange}
                    />
                  }
                  label="Sales"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;
