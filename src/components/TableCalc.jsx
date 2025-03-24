import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function TableCalc({ calcData }) {
  let totalInterest = 0;
  let investedCapital = calcData.initialInvestment;

  let finalData = [];
  let annualData = calculateInvestmentResults(calcData);
  for (let i = 0; i < annualData.length; i++) {
    totalInterest += annualData[i].interest;
    investedCapital += calcData.annualInvestment;

    annualData[i].interest = formatter.format(annualData[i].interest);
    annualData[i].valueEndOfYear = formatter.format(
      annualData[i].valueEndOfYear
    );
    finalData.push({
      year: annualData[i].year,
      investmentValue: annualData[i].valueEndOfYear,
      interestYear: annualData[i].interest,
      totalInt: formatter.format(totalInterest),
      investedCapital: formatter.format(investedCapital),
    });
  }

  function RenderTableData() {
    return finalData.map((data, index) => {
      const { year, investmentValue, interestYear, totalInt, investedCapital } =
        data;
      return (
        <tr key={index}>
          <td>{year}</td>
          <td>{investmentValue}</td>
          <td>{interestYear}</td>
          <td>{totalInt}</td>
          <td>{investedCapital}</td>
        </tr>
      );
    });
  }

  return (
    <div id="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <RenderTableData />
        </tbody>
      </table>
    </div>
  );
}
