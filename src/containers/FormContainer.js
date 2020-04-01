import React, { useState } from "react";
import Form from "../components/Form";

const initialState = {
  title: "",
  amount: 0
};

const FormContainer = () => {
  const [values, setValues] = useState(initialState);

  const { title, amount } = values;

  const onSubmit = e => {
      e.preventDefault();

      // validate

      //Expense

      // Pass to main component

      //Reset form
  }

  const onChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value
    });
  };

  return <Form title={title} amount={amount} onChange={onChange} />;
};

export default FormContainer;
