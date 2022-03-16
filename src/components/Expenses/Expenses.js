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
        const filteredExpenses = props.items.filter(el => {
            return el.date.getFullYear().toString() === filteredYear;
        })
    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter  value={filteredYear} onFilterChange={filterChangeHandler}/>
            {filteredExpenses.map(el=>
                <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}/>
            )}
        </Card>
        </div>
    )
}

export default Expenses;