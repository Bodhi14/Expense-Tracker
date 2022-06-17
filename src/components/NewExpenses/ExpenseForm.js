/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './ExpenseForm.css';
import { useFormik } from "formik";




const ExpenseForm = (props) => {

    const validation = (values) => {
        const errors = {}
        if(!values.id){
            errors.id = 'ID is a Required Field';
        }
        else if (values.id<0)
        {
            errors.id = "Sorry, ID can't be negative";
        }
    }

    const formik = useFormik({
    initialValues:{
        title: "",
        amount: "",   
        id: ""
    },
    validation,
    onSubmit: values => {
        alert("New Expense added having details: " + JSON.stringify(values, null, 2));
    }
});

//     const [newtitle, setnewtitle] = useState('');

//     const [newamount, setnewamount] = useState('');


//     const[newid, setnewid] = useState('');



    

// const titlehandler = (event) =>
// {
//     setnewtitle(event.target.value);

    

// }

// const amounthandler = (event) =>
// {
//     setnewamount(event.target.value);

// }

// const idhandler = (event) =>
// {
//     setnewid(event.target.value);
// } 



// const SubmitHandler = (event) =>
// {
//     event.preventDefault();

//     const ExpenseData = {
//         title: newtitle,
//         amount: newamount,
//         id: newid

//     }

//     setnewtitle('');
//     setnewamount('');
//     setnewid('');

    


//     props.onSaveExpenseData(ExpenseData);


//     fetch('http://127.0.0.1:8000/expenses-api/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(ExpenseData)
//     }).then(() => {
//                alert("New Expense added , having id " + ExpenseData.id);

//     }).catch(() => {
//         alert("Sorry, due to some error, this item can't be added");
//     });
// }



    return(
        <form onSubmit={ formik.handleSubmit }>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" name="title" value={ formik.values.title } onChange={ formik.handleChange }/>
                
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" name="amount" value={ formik.values.amount } min="0.01" step="0.01" onChange={ formik.handleChange }/>
            </div>
            <div className="new-expense__control">
                <label>ID</label>
                <input type="number" name="id" value={ formik.values.id } onChange={ formik.handleChange } />
                { (formik.errors.id) ?
                    <div>{formik.errors.id}</div>
                    : null
                }
            </div>
        </div>
        <div className="new-expense__actions">
            <button className="btn btn-primary" id="btn" type="submit">Add Expense</button>
        </div>
        </form>


    );

}

export default ExpenseForm;