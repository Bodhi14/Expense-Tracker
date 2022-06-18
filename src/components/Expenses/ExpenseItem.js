/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseForm from "../NewExpenses/ExpenseForm";
import { Link } from 'react-router-dom'
import UpdateForm from "../NewExpenses/UpdateForm";


const ExpenseItem = (props) => {
    

    const movetoupdate = (event) =>{
       window.scroll(0, document.body.scrollHeight)
      
       const prevdata = {
        prevtitle: props.title,
        prevamount: props.amount,
        previd: props.id

       
       }

       props.SendData(prevdata);
    }

       
    
    
    
    return ( 
        
        
        <div>
        <Card className="expense-item"> 

        <div className="expense-item__description d-flex flex-row">
        <h2>{ props.title }</h2> 
        <h2>{ props.id }</h2>

        
        <div className="expense-item__price">${ props.amount }</div>
        <Link to="/updateform">
        <button className="expense-item__editbutton btn btn-warning" onClick={ movetoupdate }>EDIT</button>
        </Link>
        </div>


        </Card>
        </div>

        





    );
}

export default ExpenseItem;