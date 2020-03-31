import React from "react";
import QuestionContainer from "./containers/QuestionContainer";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        <div className="contenido-principal contenido">
          <QuestionContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
