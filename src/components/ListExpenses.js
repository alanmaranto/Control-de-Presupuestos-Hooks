import React from "react";
import PropTypes from "prop-types";
import Expense from "./Expense";

const ListExpenses = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ListExpenses.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default ListExpenses;
