import React from "react";

function CollectInputs() {
  return (
    <div>
      <label htmlFor="salary">Enter your annual salary</label>
      <input type="number" id="salary" />
      <button>Calculate</button>
    </div>
  );
}

export default CollectInputs;
