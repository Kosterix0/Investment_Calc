import { useState } from "react";
import TableCalc from "./TableCalc";

export default function MainCalc() {
  const [calcData, setCalcData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCalcData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  }

  return (
    <>
      <div className="calculator">
        <div className="input-group">
          <div className="input-pair">
            <label>INITIAL INVESTMENT</label>
            <input
              name="initialInvestment"
              type="number"
              placeholder="1000"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className="input-pair">
            <label>ANNUAL INVESTMENT</label>
            <input
              name="annualInvestment"
              type="number"
              placeholder="900"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-pair">
            <label>EXPECTED RETURN</label>
            <input
              name="expectedReturn"
              type="number"
              step="0.1"
              placeholder="5.5"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div className="input-pair">
            <label>Duration</label>
            <input
              name="duration"
              type="number"
              placeholder="12"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
      </div>
      <TableCalc calcData={calcData} />
    </>
  );
}
