import{useState} from "react";
const ExpenseApp = () => {
  const[name,setName] = useState("");
  const[amount,setAmount] = useState("");
  const[category,setCategory] = useState("");
  const[date,setDate] = useState("");
  const[expenses,setExpenses] = useState([]);
  const addExpense = () => {
    if(
      name.trim()===""||amount.trim()===""||category.trim()===""||date.trim()===""
    ){
      return;
    }
  
    const expense={
      name,amount,category,date
    }
    setExpenses([...expenses,expense]);
    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  }
  const deleteExpense = (deleteIndex) => {
    setExpenses(expenses.filter((expense,index) => index!== deleteIndex));
      
  };
  return(
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-6 w-96">
        <h1 className="text-black text-xl  font-bold text-center mb-6"> Expense Tracker Application</h1>
        <input type="text" value={name}
        placeholder="enter your name"
        onChange={(event) =>
          setName(event.target.value)
        }
        className="w-full rounded-lg border p-3 mb-3"
        />
        <input type="number" value={amount}
        placeholder="enter your amount"
        onChange = {(event)=>
          setAmount(event.target.value)
         
         }
         className="w-full rounded-lg border p-3 mb-3"
         />
         <select value={category}
         onChange={(event)=>
          setCategory(event.target.value)
         }
          className="w-full flex  rounded-lg border p-4 mb-3">
            <option value="">Select Option</option>
            <option value="Food">Food</option>
            <option value="Transport"> Transport</option>
            <option value="Shopping">shopping</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="others">Others</option>
          </select>
          <input type="date" value={date}
          placeholder="enter your date"
          onChange={(event)=>
            setDate(event.target.value)
          }
          className="w-full rounded-lg border p-3 mb-3"
          />
          <button onClick={addExpense}
          className="bg-green-600 text-white px-3 py-2 rounded-lg  m-4 hover:bg-green-700 transition"> Add Expense </button>
          
          <h2 className="text-lg font-semibold mt-6 mb-3">Total Expenses:{expenses.length}</h2>
          { expenses.map((expense,index)=>(
            <>
            <div key={index} className="bg-gray-100 rounded-lg p-4 mb-3 shadow">
            <p> <strong> name:</strong>
             {expense.name}</p>
             <p> <strong> amount:</strong>
             {expense.amount}</p>
             <p> <strong> category:</strong>
             {expense.category}</p>
             <p> <strong> date:</strong>
             {expense.date}</p>
             <button onClick={() => deleteExpense(index)}
          className="bg-red-600 text-white px-3 py-2 rounded-lg m-4 hover:bg-red-700 transition">Delete Expense</button>
             </div>
             </>
             
             
          ))}

      </div>
    </div>
    </>
  );
};
export default ExpenseApp;