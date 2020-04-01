import React, { useState } from "react";
import Question from "../components/Question";

const QuestionContainer = ({
  setBudget,
  setRemaining
}) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const onChangeBudget = e => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const onSubmitBudget = e => {
    e.preventDefault();

    // Validate number
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    // Aftet validate
    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
  };

  return (
    <Question
      error={error}
      onChangeBudget={onChangeBudget}
      onSubmitBudget={onSubmitBudget}
    />
  );
};

export default QuestionContainer;
