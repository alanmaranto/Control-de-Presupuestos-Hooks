import React, { useState } from "react";
import QuestionContainer from "./containers/QuestionContainer";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        <div className="contenido-principal contenido">
          <QuestionContainer
            setBudget={setBudget}
            setRemaining={setRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
