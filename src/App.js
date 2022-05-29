/* eslint-disable no-unused-vars */
import React from "react";
import './App.css';
import Expenses from "./component/Expenses/Expenses";


function App()
{  
    let expenses = [
        {
            id: '1',
            title: "College Fee ",
            amount: 250,
            date: new Date(2022, 4, 28)
    
    
        },
        {
            id: '2',
            title: "College Fee ",
            amount: 500,
            date: new Date(2022, 4, 28)
    
    
        },
        {
            id: '3',
            title: "College Fee ",
            amount: 750,
            date: new Date(2022, 4, 28)
    
    
        },
        {
            id: '4',
            title: "College Fee ",
            amount: 1000,
            date: new Date(2022, 4, 28)
    
    
        }
    ]
    

    return(
        <div>
        <Expenses item={ expenses }/>
       </div>
    );
}

export default App;

