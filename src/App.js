/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import axios from 'axios';


const getURL = "https://bodhi.pythonanywhere.com/expenses-api/";
let prevexpenses = [];

const App = () => {
  const [expenses, setnewexpenses] = useState(prevexpenses);

  const addexpensehandler = (expense) => {
    const updatedexpense = [expense, ...expenses];

    setnewexpenses(updatedexpense);
  };



  useEffect(() => {
    axios.get(getURL)
      .then((data) => {
        setnewexpenses(data.data);
        console.log(data.data);
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
