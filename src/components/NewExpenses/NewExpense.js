/* eslint-disable no-unused-vars */
import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) =>
{
    const saveexpensedatahandler = (expensedata) =>
    {


        const expense_data = 
        {
             ...expensedata
        }

        props.addexpense(expense_data);

    }
    
    return(
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={ saveexpensedatahandler }> </ExpenseForm>


        </div>

    );

}

export default NewExpense;