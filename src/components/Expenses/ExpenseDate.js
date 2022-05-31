import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) =>
{
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return(
        <>
           <div className='p-1'>
            {day + "th"}
            </div>
            <div className='p-1'>
            {month}
            </div>
            <div className='p-1'>
            {year}
           </div>
        </>

    );


}

export default ExpenseDate;