import { useState } from 'react';
function TransactionForm({ inputType, accountType, onSubmit }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      type: inputType,
      amount: Number(amount),
      date: new Date().toISOString(),
    };
    onSubmit(transaction);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {inputType} to {accountType}
      </h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TransactionForm;
