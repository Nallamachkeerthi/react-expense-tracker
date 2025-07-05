import React, { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <AddTransactionForm onAdd={handleAddTransaction} />

      <h2>Transactions</h2>
      <ul className="txn-list">
        {transactions.map((txn) => (
          <li key={txn.id}>
            {txn.title}: ₹{txn.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
