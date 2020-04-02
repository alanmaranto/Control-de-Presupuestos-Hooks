import React, { useState } from "react";
import QuestionContainer from "./containers/QuestionContainer";
import FormContainer from "./containers/FormContainer";
import ListExpenses from './components/ListExpenses';
import BudgetControl from './components/BudgetControl';
function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const onSubmitExpense = expense => {
    setExpenses([
      ...expenses,
      expense
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <QuestionContainer
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <FormContainer 
                  onSubmitExpense={onSubmitExpense}
                />
              </div>
              <div className="one-half column">
                <ListExpenses 
                  expenses={expenses}
                />
                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
