import React, { useState } from "react";
import PropTypes from 'prop-types';
import Question from "../components/Question";

const QuestionContainer = ({
  setBudget,
  setRemaining,
  setShowQuestion
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
    setShowQuestion(false);
  };

  return (
    <Question
      error={error}
      onChangeBudget={onChangeBudget}
      onSubmitBudget={onSubmitBudget}
    />
  );
};

QuestionContainer.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
}

export default QuestionContainer;
