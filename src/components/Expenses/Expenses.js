/* eslint-disable no-useless-concat */
import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';



const Expenses = (props) =>
{
    
    
   return(
    <div className='expenses'>
    {
        props.item.map(
            expense => (
                <ExpenseItem title={expense.title} id={expense.id} amount={ expense.amount } />


        )
        )
    }
    </div>
   );
}

export default Expenses;