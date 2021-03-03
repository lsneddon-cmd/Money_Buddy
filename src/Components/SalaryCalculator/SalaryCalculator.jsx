import React from "react";
import { Button, Checkbox, TextField, InputLabel, InputAdornment } from '@material-ui/core';

function SalaryCalculator() {
  return (
    <div>
      <h3>Salary Calculator</h3>
      
      <TextField 
        type="number" 
        id="salary" 
        label="Annual Salary" 
        InputProps={{
          startAdornment: <InputAdornment position="start">£</InputAdornment>
        }}
      />
      <InputLabel htmlFor="is-scotland">Resident in Scotland</InputLabel>
      <Checkbox color="primary" id="is-scotland" />
      <Button color="primary">Calculate</Button>
    </div>
  );
}

export default SalaryCalculator;
