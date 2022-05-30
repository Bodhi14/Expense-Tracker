/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseForm.css';
import ExpenseItem from "../Expenses/ExpenseItem";




const ExpenseForm = () => {
    const [newtitle, setnewtitle] = useState("");

    const [newamount, setnewamount] = useState("");

    const [newdate, setnewdate] = useState("");

    const titlehandler = (event) =>
{
    setnewtitle(event.target.value);

    

}

const amounthandler = (event) =>
{
    setnewamount(event.target.value);

}

const datehandler = (event) =>
{
    setnewdate(event.target.value);

}

const SubmitHandler = (event) =>
{
    event.preventDefault();

    const ExpenseData = {
        title: newtitle,
        amount: newamount,
        date: newdate

    }
}


    return(
        <form onSubmit={ SubmitHandler }>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value="newtitle" onChange={ titlehandler }/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value="newamount" min="0.01" step="0.01" onChange={ amounthandler }/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value="newdate" onChange={ datehandler }/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button className="btn btn-primary" type="submit">Add Expense</button>
        </div>
        </form>


    );

}

export default ExpenseForm;