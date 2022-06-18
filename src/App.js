/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import UpdateForm from "./components/NewExpenses/UpdateForm";



let prevexpenses = []

const App = () =>
{  
    
    const [expenses, setnewexpenses] = useState(prevexpenses);

    


    


    const addexpensehandler = (expense) =>
    {

        

        const updatedexpense = [expense, ...expenses];
        
        setnewexpenses(updatedexpense);
        

    }

    

    useEffect((expenses) => {

        fetch('http://127.0.0.1:8000/expenses-api/').then(
            res => res.json()
            ).then((data) => {
            
                setnewexpenses(data);
                console.log(data);
              
              })
        
        
        }, []);
    

    return(
        <Router>
        <div className="bg-image">
        <NewExpense addexpense={ addexpensehandler } />
        <Expenses item={ expenses }/>
        <Routes>
            <Route path="/updateform" element={<UpdateForm></UpdateForm>}>
                
            </Route>
        </Routes>
        
        </div>
        
        
       </Router>
    );
}

export default App;

