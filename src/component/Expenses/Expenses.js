/* eslint-disable no-useless-concat */
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

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

const value = (i) =>
{
    let ans = expenses[i].amount*expenses[i].id;
    if(ans>=2000)
    {
        expenses[i].title = "(Tax Applicable) College Fee ";
        ans*=1.3;

    }

    return ans;

}

const Expenses = (props) =>
{
    
   return(
    <>
    <ExpenseItem date={expenses[0].date} title={expenses[0].title + expenses[0].id} amount={value(0)}></ExpenseItem>
    <ExpenseItem date={expenses[1].date} title={expenses[1].title + expenses[1].id} amount={value(1)}></ExpenseItem>
    <ExpenseItem date={expenses[2].date} title={expenses[2].title + expenses[2].id} amount={value(2)}></ExpenseItem>
    <ExpenseItem date={expenses[3].date} title={expenses[3].title + expenses[3].id} amount={value(3)}></ExpenseItem>
    </> 
   );

}

export default Expenses;