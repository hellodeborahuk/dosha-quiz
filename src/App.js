import "./App.css";
import  { useState } from "react";
import Welcome from "./Welcome";
import Questions from "./Questions";


function App() {
  let [appState, setAppState] = useState("welcome");

  let output;
  if (appState === "welcome") {
    output = <Welcome setAppState = {setAppState}/>;
  } else {
    output = <Questions />;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
    {output}
    </div>
  );
}

export default App;
