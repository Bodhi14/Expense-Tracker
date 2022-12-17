/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newtitle, setnewtitle] = useState("");

  const [newamount, setnewamount] = useState("");

  const [newid, setnewid] = useState("");

  const titlehandler = (event) => {
    setnewtitle(event.target.value);
  };

  const amounthandler = (event) => {
    setnewamount(event.target.value);
  };

  const idhandler = (event) => {
    setnewid(event.target.value);
  };

  const [active, setactive] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: newtitle,
      amount: newamount,
      id: newid
    };

    
    props.onSaveExpenseData(ExpenseData);

    setnewtitle("");
    setnewamount("");
    setnewid("");


    fetch("bodhi.pythonanywhere.com/expenses-api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ExpenseData)
    })
      .then(() => {
        alert("New Expense added , having id " + ExpenseData.id);
      })
      .catch(() => {
        alert("Sorry, due to some error, this item can't be added");
      });
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newtitle} onChange={titlehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newamount}
            min="0.01"
            step="0.01"
            onChange={amounthandler}
          />
        </div>
        <div className="new-expense__control">
          <label>ID</label>
          <input type="number" value={newid} onChange={idhandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          className="btn color-btn"
          id="btn"
          type="submit"
          onClick={() => {
            setTimeout(() => {
              setactive(false);
            }, 1000);
            setactive(true);
          }}
          style={{ backgroundColor: active ? "blue" : "purple" }}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
