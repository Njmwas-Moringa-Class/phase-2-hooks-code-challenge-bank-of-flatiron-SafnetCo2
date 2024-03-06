import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";
import NewTransactionForm from "./NewTransactionForm";
import './App.css';

function App() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/transactions')
            .then(response => response.json())
            .then((transactData) => setTransactions(transactData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    //console.log(transactions)
    function handleUpdateSubmision(newTransaction) {
        console.log(newTransaction);
        setTransactions(transactions => [...transactions, newTransaction]);
        const serverOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTransaction)

        }
        fetch('http://localhost:8001/transactions',serverOptions)
            .then(response => response.json())
            .then((newItem )=> console.log(newItem))
    }


    return (
        <main>
            <div className="title">
                <h1>Royal Bank of Flatiron</h1>
            </div>
            <NewTransactionForm onSubmission={handleUpdateSubmision}/>
            {transactions.length > 0 && <Transactions transactions={transactions} />}
        </main>
    );
}

export default App;
