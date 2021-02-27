import React from "react";
import CollectInputs from "./CollectInputs/CollectInputs";
import DisplayOutputs from './DisplayOutputs/DisplayOutputs';

function SalaryCalculator() {
  return (
    <div>
      <h3>SalaryCalculator</h3>
      <CollectInputs />
      <DisplayOutputs />
    </div>
  );
}

export default SalaryCalculator;
