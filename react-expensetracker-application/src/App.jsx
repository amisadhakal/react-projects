import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (
      name.trim() === "" ||
      amount.trim() === "" ||
      category === "" ||
      date === ""
    ) {
      return;
    }

    const expense = {
      name,
      amount,
      category,
      date,
    };

    setExpenses([...expenses, expense]);

    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-6 w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Expense Tracker
        </h1>

        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />

        <button
          onClick={addExpense}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition mt-3"
        >
          Add Expense
        </button>

        <h2 className="text-lg font-semibold mt-6 mb-3">
          Total Expenses: {expenses.length}
        </h2>

        {expenses.map((expense, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 mb-3 shadow"
          >
            <p>
              <strong>Name:</strong> {expense.name}
            </p>

            <p>
              <strong>Amount:</strong> Rs. {expense.amount}
            </p>

            <p>
              <strong>Category:</strong> {expense.category}
            </p>

            <p>
              <strong>Date:</strong> {expense.date}
            </p>

            <button
              onClick={() => deleteExpense(index)}
              className="bg-red-600 text-white px-3 py-2 rounded-lg mt-3 hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;