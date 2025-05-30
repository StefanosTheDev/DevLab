import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import { useState } from 'react';
function AccountDetailsPage() {
  const { user, updateAccountTransaction } = useAuth();
  const { type } = useParams(); // 'checking' or 'savings', etc.
  const account = user?.accounts.find((acc) => acc.type === type);

  const [inputType, setInputType] = useState(null);

  if (!account) return <p>Account not found</p>;

  return (
    <div className="account-details-page">
      <TransactionList
        accountType={account.type}
        transactions={account.transactions}
      />

      <button onClick={() => setInputType('deposit')}>Deposit</button>
      <button onClick={() => setInputType('withdrawal')}>Withdraw</button>

      {inputType && (
        <TransactionForm
          inputType={inputType}
          accountType={account.type}
          onSubmit={(transaction) =>
            updateAccountTransaction(account.type, transaction)
          }
        />
      )}
    </div>
  );
}

export default AccountDetailsPage;
