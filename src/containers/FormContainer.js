import React, { useState } from "react";
import Form from "../components/Form";
import shortid from 'shortid';

const initialState = {
  title: "",
  amount: 0
};

const FormContainer = () => {
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
    }
    console.log(expense)
    // Pass to main component

    //Reset form
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

export default FormContainer;
