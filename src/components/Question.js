import React from "react";
import PropTypes from "prop-types";

const Question = props => {
  return (
    <div>
      <h2>Coloca tu presupuesto</h2>
      <form>
        <input
          type="text"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupueso"
        />
      </form>
    </div>
  );
};

Question.propTypes = {};

export default Question;
