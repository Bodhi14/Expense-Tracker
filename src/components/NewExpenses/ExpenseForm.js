/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseForm.css';




const ExpenseForm = (props) => {

    const [newtitle, setnewtitle] = useState('');

    const [newamount, setnewamount] = useState('');

    const[ispending, setispending] = useState(false);

const titlehandler = (event) =>
{
    setnewtitle(event.target.value);

    

}

const amounthandler = (event) =>
{
    setnewamount(event.target.value);

}



const SubmitHandler = (event) =>
{
    event.preventDefault();

    const ExpenseData = {
        title: newtitle,
        amount: newamount,
        id: Math.random()

    }

    setnewtitle('');
    setnewamount('');

    setispending(true);


    props.onSaveExpenseData(ExpenseData);


    fetch('http://127.0.0.1:8000/expenses-api/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ExpenseData)
    }).then(() => {
        console.log(ExpenseData);
        setispending(false);
    }).catch(() => {
        console.log("Unable to fetch the api, check CORS Origin");
    })
}



    return(
        <form onSubmit={ SubmitHandler }>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={ newtitle } onChange={ titlehandler }/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={ newamount } min="0.01" step="0.01" onChange={ amounthandler }/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button className="btn btn-primary" type="submit">Add Expense</button>
        </div>
        </form>


    );

}

export default ExpenseForm;