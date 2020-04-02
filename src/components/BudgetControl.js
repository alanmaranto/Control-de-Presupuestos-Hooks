import React from "react";

const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: {budget} </div>
      <div className="alert">Restante: {remaining} </div>
    </>
  );
};

export default BudgetControl;
