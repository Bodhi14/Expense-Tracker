/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    
    

    return ( 
        
        
        <div>
        <Card className="expense-item">
        <div className='d-flex flex-row'>
           <ExpenseDate date1={ props.date }/>
        </div> 

        <div className="expense-item__description">
        <h2>{ props.title }</h2> 
        
        <div className="expense-item__price">${ props.amount }</div> 
        </div>


        </Card>
        </div>

        





    );
}

export default ExpenseItem;