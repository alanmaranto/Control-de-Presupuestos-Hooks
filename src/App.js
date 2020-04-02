import React, { useState, useEffect } from "react";
import QuestionContainer from "./containers/QuestionContainer";
import FormContainer from "./containers/FormContainer";
import ListExpenses from "./components/ListExpenses";
import BudgetControl from "./components/BudgetControl";
function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [showExpense, setShowExpense] = useState(false);

  // Update the remaining
  useEffect(() => {
    if (showExpense) {

      // Add the budget
      setExpenses([...expenses, expense]);

      // Subtract the actual budget
      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget)

      // Reset to false
      setShowExpense(false);
    }
  }, [expense, expenses, remaining, showExpense]);

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
                  setExpense={setExpense}
                  setShowExpense={setShowExpense}
                />
              </div>
              <div className="one-half column">
                <ListExpenses expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
