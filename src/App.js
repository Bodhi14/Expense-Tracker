/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let prevexpenses = [];

const App = () => {
  const [expenses, setnewexpenses] = useState(prevexpenses);

  const addexpensehandler = (expense) => {
    const updatedexpense = [expense, ...expenses];

    setnewexpenses(updatedexpense);
  };

  useEffect((expenses) => {
    fetch("bodhi.pythonanywhere.com/expenses-api/")
      .then((res) => res.json())
      .then((data) => {
        setnewexpenses(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <NewExpense addexpense={addexpensehandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
