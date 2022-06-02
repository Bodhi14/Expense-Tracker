/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    
    

    return ( 
        
        
        <div>
        <Card className="expense-item"> 

        <div className="expense-item__description d-flex flex-row">
        <h2>{ props.title }</h2> 
        <h2>{ props.id }</h2>

        
        <div className="expense-item__price">${ props.amount }</div> 
        </div>


        </Card>
        </div>

        





    );
}

export default ExpenseItem;