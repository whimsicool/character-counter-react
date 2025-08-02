import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
// import TextAreaSection from "./components/TextAreaSection";
// import StatsSection from "./components/StatsSection";
// import StatBox from "./components/StatBox";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Header />
      <Title />
      {/* <TextAreaSection />
      <StatsSection>
        <StatBox type="characters" value={613} />
        <StatBox type="words" value={104} />
        <StatBox type="sentences" value={4} />
      </StatsSection> */}
    </div>
  );
}

export default App;
