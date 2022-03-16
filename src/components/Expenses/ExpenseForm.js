import {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,SetEnteredAmount] = useState('');
    const [enteredDate,SetEnteredDate] = useState('');

    //2 Nacin za koriscenje state-a
    // const [userInput,setUserInput] =({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })
    const titleChangeHandler = (e)=>{
        setEnteredTitle(e.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : e.target.value,
        // })
    }

    const amountChangeHandler = (e) =>{
        SetEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
    }

    const dateChangeHandler = (e) =>{
       SetEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
        
    }

    const submitHandler =(e) =>{
        e.preventDefault();
        
        const ExpenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseData);

        setEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;