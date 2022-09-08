import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RankingCard } from "./components/ranking";

function App() {
  return (
    <div className="App">
      <RankingCard
        co2={200}
        cost={20}
        dailyRank={1}
        leagueRank={1}
        locality={"Chessel Drive, BS34"}
        propertyId="1"
      />
    </div>
  );
}

export default App;
