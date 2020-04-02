import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
import shortid from "shortid";

const initialState = {
  title: "",
  amount: 0
};

const FormContainer = ({ setExpense, setShowExpense }) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(false);

  const { title, amount } = values;

  const onSubmit = e => {
    e.preventDefault();

    // validate
    if (amount < 1 || isNaN(amount) || title.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //build the Expense
    const expense = {
      ...values,
      id: shortid.generate()
    };

    // Pass to main component
    setExpense(expense);
    setShowExpense(true);

    //Reset form
    setValues(initialState);
  };

  const onChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value
    });
  };

  return (
    <Form
      error={error}
      title={title}
      amount={amount}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

Form.propTypes = {
  setExpense: PropTypes.func,
  setShowExpense: PropTypes.func
};

export default FormContainer;
