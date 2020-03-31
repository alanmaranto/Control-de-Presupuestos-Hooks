import React, { useState } from "react";
import Question from "../components/Question";

const QuestionContainer = () => {
  const [quantity, setQuantity] = useState(0);

  const onChangeBudget = e => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const onSubmitBudget = e => {
    e.preventDefault();

    // Validate

    // Aftet validate
  };

  return (
    <Question onChangeBudget={onChangeBudget} onSubmitBudget={onSubmitBudget} />
  );
};

export default QuestionContainer;
