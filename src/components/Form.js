import React from "react";
import PropTypes from "prop-types";
import Error from "../core/Error";

const Form = ({ amount, title, error, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Agrega tus datos aquí</h2>
        { error ? <Error msg='Ambos campos son obligatorios o Presupuesto incorrecto' /> : null }
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={title}
            name="title"
            onChange={onChange("title")}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={amount}
            name="amount"
            onChange={onChange("amount")}
          />
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
