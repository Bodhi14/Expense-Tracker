import React from "react";
import './updateform.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import ExpenseItem from "../Expenses/ExpenseItem";



const UpdateForm = (props) => {


<ExpenseItem SendData={ previousdata }></ExpenseItem>

const previousdata = (predata) =>
{
     pretitle = predata.prevtitle;
     preamount = predata.prevamount;
     preid = predata.previd;

} 
   
    const formik = useFormik({
        

    initialValues:{
        
        

        

        title: pretitle,
        amount: preamount,   
        id: preid

    },

    validateOnBlur: true,
    onSubmit: values => {
        const updatedData = {
            title: formik.values.title,
            amount: formik.values.amount,
            id: formik.values.id

        }
        

        fetch('http://127.0.0.1:8000/expenses-api/' + formik.values.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
    }).then(
        alert("The Expense has been changed")).catch(
            alert("Sorry, unable to change the expense"));

        

        formik.values.title = '';
        formik.values.amount = '';
        formik.values.id = '';
    },
    validationSchema: Yup.object({
         title: Yup.string().max(10, "Can be at max 10 characters long").required("Required"),
         id: Yup.number().required("Required"),

    }),
});
return(
    <>
       <form onSubmit={ formik.handleSubmit }>
       <div class="form_contents">
       <label>Title</label>
       <input type="text" id="title" name="title" value={ formik.values.title } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
       {(formik.touched.title && formik.errors.title) ? <p className="errortext">{formik.errors.title}</p> : null}
        <label>Amount</label>
        <input type="number" id="amount" name="amount" value={ formik.values.amount } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
        <label>ID</label>
        <input type="number" id="id" name="id" value={ formik.values.id } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
        {(formik.touched.id && formik.errors.id) ? <p className="errortext">{formik.errors.id}</p> : null}
        <button className="btn btn-success" type="submit">Update</button>
        </div>

       </form>
    </>
);


}

export default UpdateForm;