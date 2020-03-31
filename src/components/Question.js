import React from "react";
import PropTypes from "prop-types";

const Question = ({
    error,
    onChangeBudget,
    onSubmitBudget
}) => {
  return (
    <div>
      <h2>Coloca tu presupuesto</h2>
      {error ? 'Error message' : null}
      <form onSubmit={onSubmitBudget}>
        <input
          type="text"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={onChangeBudget}
        //   onChange={ e => setQuantity(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </div>
  );
};

Question.propTypes = {};

export default Question;
