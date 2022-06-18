import React from "react";
import './updateform.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import ExpenseItem from "../Expenses/ExpenseItem";



const UpdateForm = (props) => {


<ExpenseItem SendData={ previousdata }></ExpenseItem>

const previousdata = (predata) =>
{
    let pretitle = predata.prevtitle;
    let preamount = predata.prevamount;
    let preid = predata.previd;

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
    },
    validationSchema: Yup.object({
         title: Yup.string().max(10, "Can be at max 10 characters long").required("Required"),
         id: Yup.number().required("Required"),

    }),
});
return(
    <>
       <form>
       <div class="form_contents">
       <label>Title</label>
       <input type="text" id="title" name="title" value={ formik.values.title } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
       {(formik.touched.title && formik.errors.title) ? <p className="errortext">{formik.errors.title}</p> : null}
        <label>Amount</label>
        <input type="number" id="amount" name="amount" value={ formik.values.amount } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
        <label>ID</label>
        <input type="number" id="id" name="id" value={ formik.values.id } onChange={ formik.handleChange } onBlur={ formik.handleBlur }/>
        {(formik.touched.id && formik.errors.id) ? <p className="errortext">{formik.errors.id}</p> : null}
        <button className="btn btn-success">Update</button>
        </div>

       </form>
    </>
);


}

export default UpdateForm;