/* eslint-disable no-unused-vars */
import React from "react";
import './App.css';
import Expenses from "./component/Expenses/Expenses";


function App()
{  
    let expenses = [
        {
            id: 'e1',
            title: "College Fee",
            amount: 250,
            date: new Date(2022, 4, 28)


        },
        {
            id: 'e2',
            title: "College Fee 2",
            amount: 500,
            date: new Date(2022, 4, 28)


        },
        {
            id: 'e3',
            title: "College Fee 3",
            amount: 750,
            date: new Date(2022, 4, 28)


        },
        {
            id: 'e4',
            title: "College Fee 4",
            amount: 1000,
            date: new Date(2022, 4, 28)


        }
    ]

    return(
        <div>
        <Expenses />
       </div>
    );
}

export default App;

