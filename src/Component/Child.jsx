import React, { useContext, useState } from "react";
import { TransactionContext } from "./TransContext";
function Child() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("plz enter some amount");
      return false;
    }
    console.log("chal rha ha");
    console.log(newDesc, newAmount);
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setDesc("");
    setAmount(0);
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income = income + transactions[i].amount;
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <h3>
        Your Balance <br />$ {getIncome() + getExpense()}
      </h3>

      <div className="expense-container"></div>
      <h3>
        INCOME <br />$ {getIncome()}
      </h3>
      <h3>
        EXPENSE <br />$ {getExpense()}
      </h3>

      <h3>History</h3>
      <hr />

      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (
            <li key={ind}>
              <span>${transObj.desc}</span>
              <span>${transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add new Transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            placeholder="Enter Description"
            value={newDesc}
            onChange={(ev) => setDesc(ev.target.value)}
          />
        </label>
        <label>
          Enter Amount <br />
          <input
            type="number"
            placeholder="Enter Amount"
            value={newAmount}
            onChange={(ev) => setAmount(ev.target.value)}
          />
        </label>

        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
