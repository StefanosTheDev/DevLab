import { useLocation, useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import { useState } from 'react';

function AccountDetailsPage() {
  const { state } = useLocation();
  const account = state.account;
  const [inputType, setInputType] = useState(null);

  // Derived State Of Getting Transactions.
  // map a new array
  const transactions = account.transactions;

  return (
    <div className="account-details-page">
      <div className="actions">
        {/* This is where we will do reducer stuff now */}
      </div>
      <TransactionList accountType={account.type} transactions={transactions} />
      <button onClick={() => setInputType('deposit')}>Deposit</button>
      <button onClick={() => setInputType('withdrawal')}>Withdraw</button>

      {inputType && (
        <TransactionForm
          inputType={inputType}
          accountType="checking"
          onSubmit={() => {}}
        /> // optionall pas account
      )}
    </div>
  );
}
export default AccountDetailsPage;
