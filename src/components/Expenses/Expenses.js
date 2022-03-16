import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2022');
        const filterChangeHandler = (year) =>{
            console.log(`test ${year}`);
            setFilteredYear(year);
        }
    // return(
    //     <div className="expenses">
    //         <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
    //         <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
    //         <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
    //         <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    //     </div>
    // )
    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter  value={filteredYear} onFilterChange={filterChangeHandler}/>
            {props.items.map(el=>
                <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}/>
            )}
        </Card>
        </div>
    )
}

export default Expenses;