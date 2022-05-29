/* eslint-disable no-useless-concat */
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const value = (props, i) =>
 {
    let ans = (props.item)[i].amount*(props.item)[i].id;
    if(ans>=2000)
    {
        (props.item[i]).title = "(Tax Applicable) College Fee ";
        ans*=1.3;

    }

    return ans;

}

const Expenses = (props) =>
{
    
   return(
    <>
    <ExpenseItem date={props.item[0].date} title={props.item[0].title + props.item[0].id} amount={value(props, 0)}></ExpenseItem>
    <ExpenseItem date={props.item[1].date} title={props.item[1].title + props.item[1].id} amount={value(props, 1)}></ExpenseItem>
    <ExpenseItem date={props.item[2].date} title={props.item[2].title + props.item[2].id} amount={value(props, 2)}></ExpenseItem>
    <ExpenseItem date={props.item[3].date} title={props.item[3].title + props.item[3].id} amount={value(props, 3)}></ExpenseItem>
    </>
   );
}

export default Expenses;