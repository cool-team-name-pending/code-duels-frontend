import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contest from "./Components/Contest";
import { BrowserRouter, Route } from "react-router-dom";
import Problem from "./Components/Problem";

function App() {
  const fetchProblemData = (index, name) => {
    return {
      judge: 1,
      contestId: "1419",
      index,
      name,
    };
  };

  const getProblems = (count) => {
    const problems = [];
    const index = ["A", "B", "C", "D", "E", "F"];
    const problemNames = [
      "Rain of Fire",
      "Tushar and Girls",
      "EEE and his problems",
      "Saanda's Diary",
      "PIE UPSC Classes",
      "Earth and Rain",
    ];
    for (let i = 0; i < count; i++) {
      problems.push(fetchProblemData(index[i], problemNames[i]));
    }
    return problems;
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/contest"
          render={(props) => <Contest problems={getProblems(6)} {...props} />}
        />
        <Route
          exact
          path="/contest/index=A"
          render={(props) => <Problem problem={getProblems(6)[0]} {...props} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
