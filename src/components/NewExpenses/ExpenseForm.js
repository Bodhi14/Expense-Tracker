import React from "react";
import './ExpenseForm.css';
import * as Yup from "yup";
import { useFormik } from "formik";

const ExpenseForm = (props) => {
    const formik = useFormik({
    initialValues:{
        title: '',
        amount: '',   
        id: ''
    },

    validateOnBlur: true,
    onSubmit: values => {
        const ExpenseData = {
            title: formik.values.title,
            amount: formik.values.amount,
            id: formik.values.id

        }

        formik.values.title = '';
        formik.values.amount = '';
        formik.values.id = '';

        props.onSaveExpenseData(ExpenseData);
        fetch('https://bodhi.pythonanywhere.com/expenses-api/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ExpenseData)
     }).then(() => {
                alert("New Expense added , having details id : " + JSON.stringify(ExpenseData.id)+ ", \n title : " + JSON.stringify(ExpenseData.title) + ", \n amount : " + JSON.stringify(ExpenseData.amount));
     }).catch(() => {
        alert("Sorry, due to some error, this item can't be added");
    });
    },
    validationSchema: Yup.object({
         title: Yup.string().max(20, "Can be at max 20 characters long").required("Required"),
         id: Yup.number().required("Required"),
    }),
});



    return(
        <form onSubmit={ formik.handleSubmit }>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" id="title" name="title" value={ formik.values.title } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
                {(formik.touched.title && formik.errors.title) ? <p className="errortext">{formik.errors.title}</p> : null}
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" id="amount" name="amount" value={ formik.values.amount } min="0.01" step="0.01" onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
            </div>
            <div className="new-expense__control">
                <label>ID</label>
                <input type="number" id="id" name="id" value={ formik.values.id } onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                {(formik.touched.id && formik.errors.id) ? <p className="errortext">{formik.errors.id}</p> : null}
            </div>
        </div>
        <div className="new-expense__actions">
            <button className="btn btn-primary" id="btn" type="submit">Add Expense</button>
            
        </div>
        </form>
    );

}

export default ExpenseForm;