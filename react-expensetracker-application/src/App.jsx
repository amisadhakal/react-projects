import { useState } from "react";

const ExpenseApp = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addExpense = () => {
    if (
      name.trim() === "" ||
      amount.trim() === "" ||
      category.trim() === "" ||
      date.trim() === ""
    ) {
      return;
    }

    const expense = {
      name,
      amount,
      category,
      date,
    };

    if (editingIndex === -1) {
      setExpenses([...expenses, expense]);
    } else {
      const updatedExpenses = expenses.map((currentExpense, index) =>
        index === editingIndex ? expense : currentExpense
      );

      setExpenses(updatedExpenses);
      setEditingIndex(-1);
    }

    setName("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const deleteExpense = (deleteIndex) => {
    setExpenses(
      expenses.filter((expense, index) => index !== deleteIndex)
    );

    if (editingIndex === deleteIndex) {
      setEditingIndex(-1);
      setName("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  };

  const editExpense = (expense, index) => {
    setName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
    setEditingIndex(index);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-xl p-6 w-96">

          <h1 className="text-2xl font-bold text-center mb-6">
            Expense Tracker
          </h1>

          <input
            type="text"
            value={name}
            placeholder="Enter Expense Name"
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border p-3 mb-3"
          />

          <input
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-lg border p-3 mb-3"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border p-3 mb-3"
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
            className="w-full rounded-lg border p-3 mb-3"
          />

          <button
            onClick={addExpense}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {editingIndex === -1 ? "Add Expense" : "Update Expense"}
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

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => editExpense(expense, index)}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteExpense(index)}
                  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default ExpenseApp;