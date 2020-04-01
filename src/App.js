import React, { useState } from "react";
import QuestionContainer from "./containers/QuestionContainer";
import FormContainer from './containers/FormContainer';

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
          <div className="row">
            <div className="one-half column">
              <FormContainer />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
