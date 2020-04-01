import React from "react";
import PropTypes from "prop-types";

const Form = ({ amount, title, onChange }) => {
  return (
    <div>
      <form>
        <h2>Agrega tus datos aquí</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={title}
            name="title"
            onChange={onChange('title')}
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
            onChange={onChange('amount')}
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
