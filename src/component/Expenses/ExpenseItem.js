/* eslint-disable no-unused-vars */
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    
    let variable = 100;
    

    return ( 
        
        
        <div>
        <div className="expense-item">
        <div className='d-flex flex-row'>
           <ExpenseDate date1={ props.date }/>
        </div> 

        <div className="expense-item__description">
        <h2>{ props.title }</h2> 
        
        <div className="expense-item__price">${ props.amount }</div> 
        </div>

        </div>
        </div>

        





    );
}

export default ExpenseItem;