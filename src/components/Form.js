import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  return (
    <div>
      <form>
        <h2>Agrega tus datos aquí</h2>
        <div className="campo">
          <label>Nonbre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input type="number" className="u-full-width" placeholder="Ej. 300" />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
