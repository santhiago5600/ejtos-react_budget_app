import React,{useContext} from "react";
import ExpesnseItem from './ExpenseItem';
import { AppContext } from "../context/AppContext";

const ExpenseList = ()=>{
    const {expenses} = useContext(AppContext);
    return (
        <table className="table">
            <thead className="thead-ligth">
            <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocated Budget</th>
                <th scope="col">Increase by 10</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
                {expenses.map((expense)=>(
                    <ExpesnseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    )
}
export default ExpenseList;