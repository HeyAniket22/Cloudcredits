// AddTransaction.js (updated version)

import { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (type) => {
    if (!text || !amount) return;
    const newTransaction = {
      id: Date.now(),
      text,
      amount: type === 'expense' ? -Math.abs(+amount) : +Math.abs(+amount),
    };
    onAdd(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add Income or Expense</h3>
      <div className="form-control">
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter description..."
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn" onClick={() => handleSubmit('income')}>Add Income</button>
        <button className="btn red" onClick={() => handleSubmit('expense')}>Add Expense</button>
      </div>
    </>
  );
};

export default AddTransaction;
