import { filter } from "minimatch";
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Desk (Metal)',
    amount: 250,
    date: new Date(2021, 5, 12),
  },
 
];


function App() {
  const [expenseState,setExpenseState] = useState(INITIAL_EXPENSES);

  
  const addExpenseHandler = (expense) =>{
    setExpenseState((prevExpenses=>{
      return [expense,...prevExpenses];
    }))
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenseState}/>
    </div>
  );
}

export default App;
