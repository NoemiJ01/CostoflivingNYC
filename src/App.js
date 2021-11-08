import React from "react";
import DataView from "./components/DataView.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="header">
        Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough
      </h1>
      <DataView
        borough="Staten Island"
        renterCost="$14,292"
        renterIncome="$37,882"
        renterRatio="38%"
        ownerCost="$29,752"
        ownerIncome="$94,177"
        ownerRatio="31%"
      />
      <DataView
        borough="Queens"
        renterCost="$16,812"
        renterIncome="$46,549"
        renterRatio="36%"
        ownerCost="$29,256"
        ownerIncome="$80,144"
        ownerRatio="37%"
      />

      <DataView
        borough="Brooklyn"
        renterCost="$15,144"
        renterIncome="$40,128"
        renterRatio="38%"
        ownerCost="$31,908"
        ownerIncome="$83,737"
        ownerRatio="38%"
      />
      <DataView
        borough="Manhattan"
        renterCost="$18,900"
        renterIncome="$62,173"
        renterRatio="30%"
        ownerCost="$36,252"
        ownerIncome="$142,046"
        ownerRatio="26%"
      />
      <DataView
        borough="Bronx"
        renterCost="$13,176"
        renterIncome="$29,302"
        renterRatio="45%"
        ownerCost="$28,548"
        ownerIncome="$76,454"
        ownerRatio="37%"
      />
    </div>
  );
}

export default App;
