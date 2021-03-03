import "./App.css";
import SalaryCalculator from "./Components/SalaryCalculator/SalaryCalculator";
import MainMenu from './Components/MainMenu/MainMenu';
import { Grid } from '@material-ui/core';

function App() {

  return (
    <Grid className="App">
      <MainMenu />
      <SalaryCalculator />
    </Grid>
  );
}

export default App;
