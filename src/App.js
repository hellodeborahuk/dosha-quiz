import "./App.css";
import  { useState } from "react";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Result from "./Result"


function App() {
  let [appState, setAppState] = useState("welcome");
  let [results, setResults] = useState([]);

  let output;
  if (appState === "welcome") {
    output = <Welcome setAppState = {setAppState}/>;
  } else if (appState === "questions") {
    output = <Questions setAppState={setAppState} setResults={setResults}/>;
  } else {
    output = <Result results={results} />
  }

  return (
    <div className="App">
      <header className="App-header"></header>
    {output}
    </div>
  );
}

export default App;
