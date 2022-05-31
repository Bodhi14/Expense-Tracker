/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let today = new Date(2022, 4, 30)

let prevexpenses = [
    {
        id: '1',
        title: "College Fee ",
        amount: 250,
        date: today


    },
    {
        id: '2',
        title: "College Fee ",
        amount: 500,
        date: today


    },
    {
        id: '3',
        title: "College Fee ",
        amount: 750,
        date: today


    },
    {
        id: '4',
        title: "College Fee ",
        amount: 1000,
        date: today


    }
]

const App = () =>
{  
    
    const [expenses, setnewexpenses] = useState(prevexpenses);


    


    const addexpensehandler = (expense) =>
    {
        const updatedexpense = [expense, ...expenses];
        
        setnewexpenses(updatedexpense);
        

    }
    

    return(
        <div>
        <NewExpense addexpense={ addexpensehandler } />
        <Expenses item={ expenses }/>
       </div>
    );
}

export default App;

